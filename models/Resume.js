

const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
  },
  education: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  workExperience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  skills: [String],
  summary: String,
});

module.exports = mongoose.model("Resume", resumeSchema);
