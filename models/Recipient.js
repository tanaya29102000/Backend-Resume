
const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const Recipient = mongoose.model('Recipient', recipientSchema);

module.exports = Recipient;
