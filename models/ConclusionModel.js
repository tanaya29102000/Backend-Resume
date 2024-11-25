
const mongoose = require('mongoose');

// Define the schema for a conclusion
const conclusionSchema = new mongoose.Schema({
  conclusion: {
    type: String,
    required: true 
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Conclusion', conclusionSchema);
