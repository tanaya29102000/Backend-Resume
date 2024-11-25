
const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes");
const coverLetterRoutes = require("./routes/coverLetterRoutes");  // Ensure this is the correct path for your cover letter routes
const pdfRoutes = require("./routes/pdfRoutes");
const contactRoutes = require('./routes/contactRoutes');
const recipientRoutes = require('./routes/recipientRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const openingTextRoutes = require('./routes/openingTextRoutes');
const letterRoutes = require('./routes/letterRoutes');
const conclusionRoutes = require('./routes/conclusionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/resumes', resumeRoutes); // Handling resume-related routes
app.use("/api/coverLetters", coverLetterRoutes);  // Handling cover letter-related routes
app.use("/api/pdf", pdfRoutes);
app.use('/contacts', contactRoutes);
app.use('/recipient', recipientRoutes);
app.use('/subjects', subjectRoutes);
app.use('/opening-text', openingTextRoutes);
app.use('/letters', letterRoutes);
app.use('/conclusion', conclusionRoutes);
app.use(paymentRoutes);
app.post("/api/auth/register", (req, res) => {
  
    res.send({ message: "User registered successfully" });
  });
  
  app.post("/api/auth/login", (req, res) => {
  
    res.send({ token: "dummy-jwt-token" });
  });
  
module.exports = app;
