
// routes/subjectRoutes.js
const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// POST: Create a new subject
router.post('/', subjectController.createSubject);

// GET: Get all subjects
router.get('/', subjectController.getAllSubjects);

// GET: Get a subject by ID
router.get('/:id', subjectController.getSubjectById);

// PUT: Update a subject by ID
router.put('/:id', subjectController.updateSubject);

// DELETE: Delete a subject by ID
router.delete('/', subjectController.deleteSubject);

module.exports = router;
