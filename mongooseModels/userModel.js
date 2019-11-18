const mongoose = require('mongoose');

const { Schema } = mongoose;
// const { ObjectId } = Schema;

const userModel = new Schema(
  {
    username: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    stateCode: { type: String },
    ppa: { type: String },
    emailAddress: { type: String },
    phoneNumber: { type: String },
    lga: { type: String },
    stateOfOrigin: { type: String },
    birthDay: { type: String },
    batch: { type: String },
    stream: { type: String },
    office: { type: String },
    isAdmin: { type: Boolean, default: false },
    regFeeIsPaid: { type: Boolean, default: false },
    regFeeAmount: { type: Number, default: 1000 },
    duesIsPaid: { type: Boolean, default: false },
    duesAmount: { type: Number, default: 2850 },
    duesPaid: { type: Number, default: 0 },
    duesBal: { type: Number, default: 2850 }
  }
);

module.exports = mongoose.model('User', userModel);
