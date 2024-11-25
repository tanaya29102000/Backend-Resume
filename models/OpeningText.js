
// backend/models/OpeningText.js
const mongoose = require('mongoose');

const openingTextSchema = new mongoose.Schema({
  openingText: {
    type: String,
    required: true,  // Ensure this is set to true
  },
});

const OpeningText = mongoose.model('OpeningText', openingTextSchema);
module.exports = OpeningText;
