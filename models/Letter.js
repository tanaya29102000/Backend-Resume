
const mongoose = require('mongoose');

const letterSchema = new mongoose.Schema(
  {
    letterBodyText: {
      type: String,
      required: true,  // Ensures that the letterBodyText is provided
      trim: true,      // Trims leading and trailing spaces
    },
  }
);

const Letter = mongoose.model('Letter', letterSchema);
module.exports = Letter;
