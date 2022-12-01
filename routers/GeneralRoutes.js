const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('General/home-page');
});

router.get('/about-us', (req, res) => {
    res.render('General/about-us');
});

router.get('/contact-us', (req, res) => {
    res.render('General/contact-us');
});
router.get('/log-in', (req, res) => {
    res.render('General/log-in');
});
router.get('/home-page', (req, res) => {
    res.render('General/home-page');
});
router.get('/sign-up', (req, res) => {
    res.render('General/sign-up');
});

module.exports = router;