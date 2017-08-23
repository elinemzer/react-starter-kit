const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  zipCode: {
    type: Number,
    min: 5,
    max: 5,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid Email Provided',
      isAsync: false,
    },
  },
  phone: {
    type: Number,
    max: 10,
  },
  notes: {
    type: String,
    maxlength: 500,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
