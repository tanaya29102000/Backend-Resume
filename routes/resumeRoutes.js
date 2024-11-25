
// routes/resumeRoutes.js
const express = require('express');
const {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createResume);
router.get('/:name', authMiddleware, getResumes);
router.get('/:id', authMiddleware, getResumeById);
router.put('/:id', authMiddleware, updateResume);
router.delete('/:id', authMiddleware, deleteResume);

module.exports = router;
