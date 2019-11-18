/* eslint-disable no-param-reassign */
const express = require('express');
const debug = require('debug')('app:memberRoutes');

const membersController = require('../controllers/membersController');

const memberRouter = express.Router();

function router(User) {
  const controller = membersController(User);
  memberRouter.route('/members')
    .post(controller.post)
    .get(controller.get);

  memberRouter.use('/members/:memberId', (req, res, next) => {
    User.findById(req.params.memberId, (err, user) => {
      if (err) {
        debug(err.stack);
        return res.send(err);
      }
      if (user) {
        req.user = user;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  memberRouter.route('/members/:memberId')
    .get((req, res) => {
      const returnUser = req.user.toJSON();
      // const username = req.user.username.replace(' ', '%20');
      returnUser.links = {};
      returnUser.links.FilterByThisUsername = `http://${req.headers.host}/api/members/?username=${req.user.username}`;
      res.json(returnUser);
    })
    .put((req, res) => {
      const { user } = req;
      user.username = req.body.username;
      user.password = req.body.password;
      req.user.save((err) => {
        if (err) {
          debug(err.stack);
          return res.send(err);
        }
        return res.json(user);
      });
    })
    .patch((req, res) => {
      const { user } = req;

      // eslint-disable-next-line no-underscore-dangle
      if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const [key, value] = item;
        user[key] = value;
      });
      req.user.save((err) => {
        if (err) {
          debug(err.stack);
          return res.send(err);
        }
        return res.json(user);
      });
    })
    .delete((req, res) => {
      req.user.remove((err) => {
        if (err) {
          debug(err.stack);
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });
  return memberRouter;
}

module.exports = router;
