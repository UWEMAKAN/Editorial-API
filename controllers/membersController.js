const debug = require('debug')('app:membersController');

function booksController(User) {
  function post(req, res) { // eslint-disable-line consistent-return
    const user = new User(req.body);
    debug(user);
    if (!req.body.password) {
      res.status(400);
      return res.send('Password is required');
    }
    user.save((err) => {
      if (err) {
        debug(err.stack);
      }
      return res.json(user);
    });
  }

  function get(req, res) {
    const query = {};
    if (req.query.username) {
      query.username = req.query.username;
    }
    User.find(query, (err, users) => {
      if (err) {
        debug(err.stack);
        return res.send(err);
      }
      const returnUsers = users.map((user) => {
        const newUser = user.toJSON();
        newUser.links = {};
        newUser.links.self = `http://${req.headers.host}/api/members/${user._id}`;
        return newUser;
      });
      return res.json(returnUsers);
    });
  }

  return {
    post,
    get
  };
}

module.exports = booksController;
