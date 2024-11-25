
const Payment = require('../models/paymentModel');
const nodemailer = require('nodemailer');

// POST: Save Payment Data
const savePaymentData = async (req, res) => {
  try {
    console.log("Received request:", req.body);

    const { cardNumber, cardHolder, expiry, cvv, mail, plan, amount } = req.body;
  

    console.log("Saving payment to database...");
    const payment = new Payment({ cardNumber, cardHolder, expiry, cvv, plan, amount });
    await payment.save();

    console.log("Sending email...");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: mail,
      subject: 'Payment Successful',
      text: `Your payment for ${plan} was successful!`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    res.status(200).json({ message: "Payment successful" });
  } catch (error) {
    console.error("Error in savePaymentData:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// GET: Retrieve All Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error retrieving payments:', error.message);
    res.status(500).json({ message: 'Error retrieving payments', error: error.message });
  }
};

module.exports = { savePaymentData, getAllPayments };
