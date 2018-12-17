const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = 3000;

// Allowing us to handle our routes
app.use('/', routes);

app.listen(port, () => {
    console.log('Brendoces running on port ${3000}!');
});