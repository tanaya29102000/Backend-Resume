
// backend/routes/openingTextRoutes.js
const express = require('express');
const router = express.Router();
const openingTextController = require('../controllers/openingTextController');

// CRUD routes
router.post('/', openingTextController.createOpeningText);        // Create
router.get('/', openingTextController.getAllOpeningTexts);       // Read all
router.put('/:id', openingTextController.updateOpeningText);     // Update
router.delete('/', openingTextController.deleteOpeningText);  // Delete

module.exports = router;
