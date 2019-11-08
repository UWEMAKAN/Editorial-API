const express = require('express');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router(User) {
  authRouter.route('/signUp')
    .get((req, res) => {
      res.('/members');
    });

  return authRouter;
}

module.exports = router;
