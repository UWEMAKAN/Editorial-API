class Member {
  constructor(firstname, lastname, stateCode) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.stateCode = stateCode;
    this.ppa = '';
    this.emailAddress = '';
    this.phoneNumber = '';
    this.lga = '';
    this.stateOfOrigin = '';
    this.birthday = '';
    this.batch = '';
    this.stream = '';
    this.office = '';
  }

  get contactInfo() {
    return {
      ppa: this.ppa,
      email: this.emailAddress,
      phoneNumber: this.phoneNumber
    };
  }

  get personalInfo() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      birthday: this.birthday,
      stateOfOrigin: this.stateOfOrigin
    };
  }

  get nyscInfo() {
    return {
      stateCode: this.stateCode,
      lga: this.lga,
      batch: this.batch,
      stream: this.stream
    };
  }

  set firstname(first) {
    this.firstname = first;
  }

  set lastname(last) {
    this.lastname = last;
  }

  set stateCode(code) {
    this.stateCode(code);
  }

  set ppa(ppa) {
    this.ppa = ppa;
  }

  set email(email) {
    this.emailAddress = email;
  }

  set phone(phone) {
    this.phoneNumber = phone;
  }

  set lga(lga) {
    this.lga = lga;
  }

  set state(state) {
    this.stateOfOrigin = state;
  }

  set birthday(birth) {
    this.birthday = birth;
  }

  set batch(batch) {
    this.batch = batch;
  }

  set stream(stream) {
    this.stream = stream;
  }

  set office(office) {
    this.office = office;
  }
}

module.exports = Member;
