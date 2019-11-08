require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../app');

const User = mongoose.model('User');
const agent = request.agent(app);

describe('Book Crud Test', () => {
  it('should allow a member to be posted and return with _id', (done) => {
    const memberPost = { firstname: 'Mallam', username: 'warrie.warrie.us@gmail.com', password: 'seniorMallam' };

    agent.post('/api/members')
      .send(memberPost)
      .expect(200)
      .end((err, results) => {
        results.body.password.length.should.be.greaterThanOrEqual(8);
        results.body.should.have.property('_id');
        results.body.should.have.property('firstname');
        done();
      });
  });

  afterEach((done) => {
    User.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
