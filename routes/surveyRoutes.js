// routes/surveyRoutes.js
//express is the Node.js web application framework used to create the router.
const express = require('express');
//router is an instance of the Express Router, which is used to define the survey-related routes.
const router = express.Router();
//Survey is the Mongoose model imported from the ../models/Survey file. This model represents the MongoDB collection for surveys and provides an interface to interact with the data.
const Survey = require('../models/Survey');

// Create a new survey
//The async (req, res) => { ... } function is the route handler, which is executed when the request is received.
router.post('/surveys', async (req, res) => {
  try {
    // Extract 'title' and 'description' from the request body
    const { title, description } = req.body;

    // Create a new instance of the 'Survey' model with the extracted data
    const survey = new Survey({ title, description });

    // Save the new survey document to the MongoDB collection
    await survey.save();

    // Respond with the created survey as a JSON object and HTTP status code 201 (Created)
    res.status(201).json(survey);
  } catch (error) {
    // If an error occurs during the process, respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: 'Failed to create a survey' });
  }
});

// Get all surveys
router.get('/surveys', async (req, res) => {
  try {
    // Find all surveys in the MongoDB collection
    const surveys = await Survey.find();

    // Respond with the list of surveys as a JSON array
    res.json(surveys);
  } catch (error) {
    // If an error occurs during the process, respond with an error message and HTTP status code 500 (Internal Server Error)
    res.status(500).json({ error: 'Failed to fetch surveys' });
  }
});

// Add more routes for updating and getting a single survey as needed

module.exports = router;

//In a RESTful API, routes are used to define the different endpoints (URLs) that clients can access to interact with the server and perform
// various operations on the resources (data) managed by the API. Routes determine how the server responds to different types of HTTP requests 
//(e.g., GET, POST, PUT, DELETE) made by clients.