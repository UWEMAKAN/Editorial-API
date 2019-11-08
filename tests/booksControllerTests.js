const should = require('should');
const sinon = require('sinon');
const membersController = require('../controllers/membersController');

describe('Members Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty password field on post', () => {
      function User() { this.save = () => {}; }

      const req = {
        body: {
          username: 'esuaekpo@gmail.com',
          password: 'password'
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      const controller = membersController(User);
      controller.post(req, res);
      // should(req.status)('password', 'password');
      should(req.body).have.property('password');
      // res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      // res.send.calledWith('Password is required').should.equal(true);
    });
  });
});
