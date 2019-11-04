const Member = require('./Member');

class Admin extends Member {
  constructor(firstname, lastname, stateCode, username = '', password = '') {
    super(firstname, lastname, stateCode);
    this.username = username;
    this.password = password;
  }
}

module.exports = Admin;
