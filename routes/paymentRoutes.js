
// In your backend's routes file (e.g., paymentRoutes.js)
const express = require('express');
const { savePaymentData, getAllPayments } = require('../controllers/paymentController');
const router = express.Router();

// Define the POST route for saving payment data
router.post('/api/payments', savePaymentData);

// Optionally, define the GET route to fetch all payments
router.get('/api/payments', getAllPayments);

module.exports = router;
