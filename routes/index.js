const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
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