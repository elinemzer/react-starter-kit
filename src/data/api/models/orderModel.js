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
  },
  notes: {
    type: String,
    maxlength: 500,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
