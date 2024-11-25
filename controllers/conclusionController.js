
// controllers/conclusionController.js

const Conclusion = require('../models/ConclusionModel');

// Create a new conclusion, but check if it already exists
exports.createConclusion = async (req, res) => {
  try {
    // Check if a conclusion with the same text already exists
    const existingConclusion = await Conclusion.findOne({ conclusion: req.body.conclusion });
    if (existingConclusion) {
      return res.status(400).json({ message: 'This conclusion already exists' });
    }

    // If it doesn't exist, create and save a new conclusion
    const conclusion = new Conclusion({
      conclusion: req.body.conclusion,
    });
    await conclusion.save();
    res.status(201).json(conclusion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating conclusion', error });
  }
};
exports.getAllConclusions = async (_req, res) => {
  try {
    const conclusions = await Conclusion.find();
    res.json(conclusions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving conclusions', error });
  }
};

// Get a specific conclusion by ID
exports.getConclusionById = async (req, res) => {
  try {
    const conclusion = await Conclusion.findById(req.params.id);
    if (conclusion) {
      res.json(conclusion);
    } else {
      res.status(404).json({ message: 'Conclusion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving conclusion', error });
  }
};

// Update a conclusion by ID
exports.updateConclusion = async (req, res) => {
  try {
    const conclusion = await Conclusion.findByIdAndUpdate(
      req.params.id,
      { conclusion: req.body.conclusion },
      { new: true, runValidators: true }
    );
    if (conclusion) {
      res.json(conclusion);
    } else {
      res.status(404).json({ message: 'Conclusion not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating conclusion', error });
  }
};


exports.deleteConclusion = async (req, res) => {
  try {
    // Delete all conclusions in the collection
    const deletedConclusions = await Conclusion.deleteMany({});

    // Check if any conclusions were deleted
    if (deletedConclusions.deletedCount === 0) {
      return res.status(404).json({ message: 'No conclusions found to delete' });
    }

    res.status(200).json({
      message: `Successfully deleted ${deletedConclusions.deletedCount} conclusions`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting conclusions', error });
  }
};
