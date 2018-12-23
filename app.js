const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const port = 3000;

// creating our Express app
const app = express();

// view engine setup.  Telling our app to look under views and use pug for our view engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Allowing us to handle our routes
app.use('/', routes);

app.listen(port, () => {
    console.log('Brendoces running on port ${3000}!');
});