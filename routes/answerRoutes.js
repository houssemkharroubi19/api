// routes/answerRoutes.js
const express = require('express');
const router = express.Router();
const SurveyQuestionAnswer = require('../models/SurveyQuestionAnswer');

// Create a new answer for a question
router.post('/answers', async (req, res) => {
  try {
    // Extract 'questionId' and 'answerText' from the request body
    const { questionId, answerText } = req.body;

    // Create a new instance of the 'SurveyQuestionAnswer' model with the extracted data
    const answer = new SurveyQuestionAnswer({ questionId, answerText });

    // Save the new answer document to the MongoDB collection
    await answer.save();

    // Respond with the created answer as a JSON object and HTTP status code 201 (Created)
    res.status(201).json(answer);
  } catch (error) {
    // If an error occurs during the process, respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: 'Failed to create an answer' });
  }
});

// Get all answers for a question
router.get('/answers/:questionId', async (req, res) => {
  try {
    // Extract 'questionId' from the request parameters (URL)
    const { questionId } = req.params;

    // Find all answers in the MongoDB collection that match the given 'questionId'
    const answers = await SurveyQuestionAnswer.find({ questionId });

    // Respond with the list of answers as a JSON array
    res.json(answers);
  } catch (error) {
    // If an error occurs during the process, respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: 'Failed to fetch answers' });
  }
});

// Add more routes for updating and getting a single answer as needed

module.exports = router;

