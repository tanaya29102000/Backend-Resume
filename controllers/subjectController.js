
// controllers/subjectController.js
const Subject = require('../models/Subject');

// CREATE: Add a new subject
exports.createSubject = async (req, res) => {
  try {
    const { subjectName, title } = req.body;

    // Check if the subject already exists
    const existingSubject = await Subject.findOne({ subjectName });
    if (existingSubject) {
      return res.status(400).json({ message: 'Subject already exists' });
    }

    // Create a new subject
    const newSubject = new Subject({ subjectName, title });
    await newSubject.save();

    res.status(201).json(newSubject);
  } catch (err) {
    res.status(500).json({ message: 'Error creating subject', error: err });
  }
};

// READ: Get all subjects
exports.getAllSubjects = async (_req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subjects', error: err });
  }
};

// READ: Get a subject by ID
exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subject', error: err });
  }
};

// UPDATE: Update a subject by ID
exports.updateSubject = async (req, res) => {
  try {
    const { subjectName, title } = req.body;
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      { subjectName, title },
      { new: true }
    );

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json({ message: 'Error updating subject', error: err });
  }
};


exports.deleteSubject = async (_req, res) => {
  try {
    // Delete all subjects in the collection
    const deletedSubjects = await Subject.deleteMany({});

    // Check if any subjects were deleted
    if (deletedSubjects.deletedCount === 0) {
      return res.status(404).json({ message: 'No subjects found to delete' });
    }

    res.status(200).json({
      message: `All subjects deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting subjects', error: err });
  }
};
