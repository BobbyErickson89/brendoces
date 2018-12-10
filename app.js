const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Brendoces website');
});

app.listen(port, () => {
    console.log('Brendoces running on port ${3000}!');
});