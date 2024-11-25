
const Letter = require('../models/Letter');

// Create: Add letter body text to the database
exports.addLetter = async (req, res) => {
  try {
    const { letterBodyText } = req.body;

    // Validate input before saving to DB
    if (!letterBodyText || letterBodyText.trim() === '') {
      return res.status(400).json({ message: 'Letter body text is required' });
    }

    // Create a new letter document
    const newLetter = new Letter({ letterBodyText });

    // Save to the database
    await newLetter.save();

    res.status(201).json({ message: 'Letter body text added successfully', letter: newLetter });
  } catch (error) {
    console.error('Error adding letter body text:', error);
    res.status(500).json({ message: 'Server error: Could not save letter body text.' });
  }
};

// Read: Get all letter body texts
exports.getLetters = async (_req, res) => {
  try {
    const letters = await Letter.find();
    res.status(200).json(letters);
  } catch (error) {
    console.error('Error fetching letters:', error);
    res.status(500).json({ message: `Server error: Could not fetch letters. ${error.message}` });
  }
};

// Read: Get a single letter body text by ID
exports.getLetterById = async (req, res) => {
  try {
    const letter = await Letter.findById(req.params.id);
    if (!letter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    res.status(200).json(letter);
  } catch (error) {
    console.error('Error fetching letter by ID:', error);
    res.status(500).json({ message: `Server error: Could not fetch letter. ${error.message}` });
  }
};

// Update: Update a letter body text by ID
exports.updateLetter = async (req, res) => {
  try {
    const { letterBodyText } = req.body;
    const updatedLetter = await Letter.findByIdAndUpdate(
      req.params.id,
      { text: letterBodyText },
      { new: true, runValidators: true }
    );
    if (!updatedLetter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    res.status(200).json({ message: 'Letter updated successfully', letter: updatedLetter });
  } catch (error) {
    console.error('Error updating letter:', error);
    res.status(500).json({ message: `Server error: Could not update letter. ${error.message}` });
  }
};




exports.deleteLetter = async (req, res) => {
  try {
    // Delete all letters in the collection
    const deletedLetters = await Letter.deleteMany({});

    // Check if any letters were deleted
    if (deletedLetters.deletedCount === 0) {
      return res.status(404).json({ message: 'No letters found to delete' });
    }

    res.status(200).json({
      message: `All letters deleted successfully`,
    });
  } catch (error) {
    console.error('Error deleting letters:', error);
    res.status(500).json({ message: `Server error: Could not delete letters. ${error.message}` });
  }
};
