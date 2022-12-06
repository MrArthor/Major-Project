const express = require('express');
const router = express.Router();
const io = require('./ChatApplication');
const UserModel = require('../Models/UserModel');
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
router.post('/sign-up', async(req, res) => {
    const Title = "Sign Up";
    const temp = req.body.Signup;
    const User = new UserModel(req.body.Signup);
    await User.save();
    console.log(temp);
    if (temp.Type == "Doctor")
        res.redirect('/Doctor/add-doctor');
    else if (temp.Type == "Patient")
        res.redirect('/Patient/add-patient');
    else if (temp.Type == "Volunteer")
        res.redirect('/Volunteer/add-volunteer');

});


router.get('/Chat', async(req, res) => {
    // res.redirect('www.google.com');
    // res.redirect('https://google.com');
    const Title = "Chat";
    res.redirect('http://localhost:5000/shit');
})
module.exports = router;