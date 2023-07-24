// define the structure of documents (records) that will be stored in a MongoDB collection
const mongoose = require('mongoose');
// mongoose  It provides an easy way to interact with MongoDB and perform CRUD (Create, Read, Update, Delete) operations.
const surveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  
});
// bech testa3mel model hatha fel crud operation on the MongoDB collection named surveys
module.exports = mongoose.model('Survey', surveySchema);