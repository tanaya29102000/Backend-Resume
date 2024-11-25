
const express = require('express');
const router = express.Router();
const recipientController = require('../controllers/recipientController');

// Route to create a new recipient
router.post('/', recipientController.createRecipient);        // Create

// Route to get all recipients
router.get('/', recipientController.getAllRecipients);        // Read all (Corrected function name)

// Route to update a recipient by ID
router.put('/:id', recipientController.updateRecipient);      // Update

// Route to delete a recipient by ID
router.delete('/', recipientController.deleteRecipient);   // Delete

module.exports = router;
