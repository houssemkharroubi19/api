// models/SurveyQuestionAnswer.js
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'SurveyQuestion', required: true },
  answerText: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('SurveyQuestionAnswer', answerSchema);
