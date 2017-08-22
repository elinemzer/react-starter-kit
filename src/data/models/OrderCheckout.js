const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  First_name: {
    type: String,
  },
  Last_name: {
    type: String,
  },
});

module.exports = mongoose.model('Orders', OrderSchema);
