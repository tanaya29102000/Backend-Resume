
// backend/controllers/openingTextController.js
const OpeningText = require('../models/OpeningText');

// Create new Opening Text
exports.createOpeningText = async (req, res) => {
  try {
    const { openingText } = req.body;

    // Check if openingText already exists
    const existingOpeningText = await OpeningText.findOne({ openingText });
    if (existingOpeningText) {
      return res.status(400).json({ message: 'Opening text already exists' });
    }

    // Create new openingText if it does not exist
    const newOpeningText = new OpeningText({ openingText });
    await newOpeningText.save();
    res.status(201).json({ message: 'Opening text created successfully', data: newOpeningText });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create opening text', error: error.message });
  }
};


// Get all Opening Texts
exports.getAllOpeningTexts = async (_req, res) => {
  try {
    const openingTexts = await OpeningText.find();
    res.status(200).json(openingTexts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch opening texts', error: error.message });
  }
};


// Update Opening Text by ID
exports.updateOpeningText = async (req, res) => {
  try {
    const { id } = req.params;
    const { openingText } = req.body;
    const updatedOpeningText = await OpeningText.findByIdAndUpdate(id, { openingText }, { new: true });
    if (!updatedOpeningText) {
      return res.status(404).json({ message: 'Opening text not found' });
    }
    res.status(200).json({ message: 'Opening text updated successfully', data: updatedOpeningText });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update opening text', error: error.message });
  }
};

// Delete Opening Text by ID

exports.deleteOpeningText = async (req, res) => {
  try {
    // Delete all opening texts in the collection
    const deletedOpeningTexts = await OpeningText.deleteMany({});

    // Check if any opening texts were deleted
    if (deletedOpeningTexts.deletedCount === 0) {
      return res.status(404).json({ message: 'No opening texts found to delete' });
    }

    res.status(200).json({
      message: `All opening texts deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete opening texts', error: error.message });
  }
};
