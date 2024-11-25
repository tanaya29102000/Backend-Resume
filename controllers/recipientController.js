

const Recipient = require('../models/Recipient');


// Create a new recipient
exports.createRecipient = async (req, res) => {
  try {
  
    const existingRecipient = await Recipient.findOne({ email: req.body.email });
    
    if (existingRecipient) {
      return res.status(400).json({ message: 'Recipient with this email already exists' });
    }

  
    const existingPhone = await Recipient.findOne({ phone: req.body.phone });

    if (existingPhone) {
      return res.status(400).json({ message: 'Recipient with this phone number already exists' });
    }

    const newRecipient = new Recipient(req.body);
    const savedRecipient = await newRecipient.save();
    res.status(201).json(savedRecipient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating recipient', error });
  }
};



exports.getAllRecipients = async (_req, res) => {
  try {
    const recipients = await Recipient.find(); 
    res.status(200).json(recipients); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipients', error });  // If an error occurs, send a 500 status code and an error message
  }
};



exports.updateRecipient = async (req, res) => {
  try {
    const updatedRecipient = await Recipient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedRecipient) return res.status(404).json({ message: 'Recipient not found' });
    res.status(200).json(updatedRecipient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating recipient', error });
  }
};

// Delete a recipient by ID
exports.deleteRecipient = async (req, res) => {
  try {
    const deletedRecipient = await Recipient.findByIdAndDelete(req.params.id);
    if (!deletedRecipient) return res.status(404).json({ message: 'Recipient not found' });
    res.status(200).json({ message: 'Recipient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipient', error });
  }
};

exports.deleteRecipient = async (_req, res) => {
  try {
    // Delete all recipients in the collection
    const deletedRecipients = await Recipient.deleteMany({});

    // Check if any recipients were deleted
    if (deletedRecipients.deletedCount === 0) {
      return res.status(404).json({ message: 'No recipients found to delete' });
    }

    res.status(200).json({
      message: `All recipients deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipients', error });
  }
};
