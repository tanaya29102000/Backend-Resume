

const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  const { name, personalInfo, education, workExperience, skills, summary } = req.body;
  try {
    const resume = new Resume({ name, personalInfo, education, workExperience, skills, summary });
    await resume.save();
    res.status(201).json({ resume });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ name: req.params.name });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: 'Resume not found' });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateResume = async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResume) return res.status(404).json({ error: 'Resume not found' });
    res.json(updatedResume);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteResume = async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);
    if (!deletedResume) return res.status(404).json({ error: 'Resume not found' });
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
