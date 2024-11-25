
// models/Subject.js
const mongoose = require('mongoose');

// Define the schema for Subject
const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  title: { type: String, required: true },
});

// Create the model based on the schema
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
