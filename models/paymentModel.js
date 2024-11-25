
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  cardNumber: String,
  cardHolder: String,
  expiry: String,
  cvv: String,
  plan: String,
  amount: String,
});

module.exports = mongoose.model('Payment', paymentSchema);
