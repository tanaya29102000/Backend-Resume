
const mongoose = require("mongoose");

const coverLetterSchema = new mongoose.Schema({
  subjectDetails: {
    subjectName: { type: String },
    title: { type: String },
  },
  openingString: { type: String },
  writer: {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    profession: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String, required: false },
    phone: { type: String },
    email: { type: String },
    companyName: { type: String, required: false },
  },
  receiver: {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    profession: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String, required: false },
    phone: { type: String },
    email: { type: String },
    companyName: { type: String, required: false },
  },
  letterBody: { type: String },
  closingText: { type: String },
  conclusion: { type: String },
});

module.exports = mongoose.model("CoverLetter", coverLetterSchema);
