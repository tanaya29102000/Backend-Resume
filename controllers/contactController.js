
// controllers/contactController.js
const Contact = require('../models/Contact');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    // Check if the contact already exists (assuming you check by email or phone number)
    const existingContact = await Contact.findOne({ email: req.body.email }); // You can change this condition to check by phone, name, etc.

    if (existingContact) {
      return res.status(400).json({ message: 'Contact already exists!' });
    }

    // If not, create and save the new contact
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({ message: 'Contact created successfully!', data: newContact });
  } catch (error) {
    res.status(400).json({ message: 'Error creating contact', error });
  }
};



exports.getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find();
    console.log('Fetched contacts:', contacts); // Log the data to check if it's being retrieved
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};


// Update a contact by ID
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedContact) {
      res.status(200).json({ message: 'Contact updated successfully!', data: updatedContact });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating contact', error });
  }
};

// Delete a contact by ID
exports.deleteAllContacts = async (_req, res) => {
  try {
    // Delete all contacts from the collection
    const deletedContacts = await Contact.deleteMany({});
    
    // If deletion is successful, return a success message
    res.status(200).json({
      message: 'All contacts deleted successfully!',
      data: { deletedCount: deletedContacts.deletedCount },
    });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting contacts', error });
  }
};
