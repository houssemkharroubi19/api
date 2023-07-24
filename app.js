// popular web application framework for Node.js
const express = require('express');
//Object-Data Modeling (ODM) library for MongoDB,
const mongoose = require('mongoose');
//particularly useful for handling JSON data
const bodyParser = require('body-parser');
//, allowing the application to handle cross-origin requests from different domains.
const cors = require('cors');
//This line creates an instance of the Express application by calling the express() function. This app object represents our web application and allows us to configure and define routes, middleware, and other application settings.
const app = express();
app.use(bodyParser.json());
app.use(cors());
//handle cross-origin requests and allow requests from different domains.
const surveyRoutes = require('./routes/surveyRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

app.use('/api', surveyRoutes);
app.use('/api', questionRoutes);
app.use('/api', answerRoutes);

// not wroking try to fix this ..
//We set up middleware using app.use() to use body-parser for parsing JSON data in request bodies and cors to enable cross-origin requests.
const mongoURI = 'mongodb://localhost:27017/newtestdata';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});
//

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
