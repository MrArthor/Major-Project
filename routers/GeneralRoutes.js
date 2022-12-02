const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const Title = "Home";
    const CssLink = 'home-page'
    res.render('General/home-page', { Title, CssLink });
});
router.get('/home-page', (req, res) => {
    const Title = "Home";
    const CssLink = 'home-page'
    res.render('General/home-page', { Title, CssLink });
});
router.get('/about-us', (req, res) => {
    const Title = "About Us";
    const CssLink = 'about-us'
    res.render('General/about-us', { Title, CssLink });
});

router.get('/contact-us', (req, res) => {
    const Title = "Contact Us";
    const CssLink = 'contact-us'
    res.render('General/contact-us', { Title, CssLink });
});
router.get('/log-in', (req, res) => {
    const Title = "Log In";
    const CssLink = 'log-in'
    res.render('General/log-in', { Title, CssLink });
});

router.post('/log-in', (req, res) => {
    const Title = "Log In";
    const CssLink = 'log-in'
    console.log(req.body.Signin);
    res.send(req.body.Signin);
})
router.get('/sign-up', (req, res) => {
    const Title = "Sign Up";
    var CssLink = 'sign-up'
    res.render('General/sign-up', { Title, CssLink });
});
router.post('/sign-up', (req, res) => {
    const Title = "Sign Up";
    const temp = req.body.Signup;
    console.log(temp);
    res.send('Sign Up');
});

module.exports = router;