
// routes/conclusionRoutes.js

const express = require('express');
const conclusionController = require('../controllers/conclusionController');

const router = express.Router();

// Route to create a new conclusion
router.post('/', conclusionController.createConclusion);

// Route to get all conclusions
router.get('/', conclusionController.getAllConclusions);

// Route to get a specific conclusion by ID
router.get('/:id', conclusionController.getConclusionById);

// Route to update a specific conclusion by ID
router.put('/:id', conclusionController.updateConclusion);

// Route to delete a specific conclusion by ID
router.delete('/', conclusionController.deleteConclusion);

module.exports = router;
