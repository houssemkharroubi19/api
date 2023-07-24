// models/SurveyQuestion.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey', required: true },
  questionText: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('SurveyQuestion', questionSchema);
