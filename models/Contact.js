
// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profession: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
