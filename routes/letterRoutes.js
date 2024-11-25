
// server/routes/letterRoutes.js
const express = require('express');
const {
  addLetter,
  getLetters,
  getLetterById,
  updateLetter,
  deleteLetter
} = require('../controllers/letterController');

const router = express.Router();

// Create a new letter
router.post('/', addLetter);

// Get all letters
router.get('/', getLetters);

// Get a single letter by ID
router.get('/:id', getLetterById);

// Update a letter by ID
router.put('/:id', updateLetter);

// Delete a letter by ID
router.delete('/', deleteLetter);

module.exports = router;
