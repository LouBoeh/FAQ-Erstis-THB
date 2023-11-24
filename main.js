const express = require('express');
const app = express();
const answersApp = require('./answers');
const answeredQuestionsApp = require('./answered_questions');

app.use(express.static('public'));

// Use the answers route handler at a specific URL
app.use('/answer', answersApp.app);

// Use the answered questions route handler at the root URL '/'
app.use('/', answeredQuestionsApp.app);

// Start the server
const server = app.listen(8080, function () {
  console.log("Server runs on port 8080");
});
