
// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define routes and assign controller methods
router.post('/', contactController.createContact);
router.get('/', contactController.getAllContacts);
router.put('/:id', contactController.updateContact);
router.delete('/', contactController.deleteAllContacts);

module.exports = router;
