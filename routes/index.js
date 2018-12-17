const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Brendoces website');
});

router.get('/menu', (req, res) => {
   res.send('Brendoces menu');
});

router.get('/pricing', (req, res) => {
    res.send('Brendoces pricing');
});

router.get('/contact', (req, res) => {
   res.send('Contact');
});

module.exports = router;