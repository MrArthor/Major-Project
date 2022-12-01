const express = require('express');
const router = express.Router();

router.get('/Portal', (req, res) => {
    const Title = "Home";
    const CssLink = 'Doctor-Portal';
    res.render('Doctor/Doctor-Portal', { Title, CssLink });
});

router.get('/vitals-edit-form-doc', (req, res) => {
    const Title = "Vitals Edit Form";
    const CssLink = 'Vitals-Edit-Form-Doc';
    res.render('Doctor/vitals-edit-form-doc', { Title, CssLink });
});

router.get('/doctor-portal-settings', (req, res) => {
    const Title = "Settings";
    const CssLink = 'Doctor-Portal-Settings';
    res.render('Doctor/doctor-portal-settings', { Title, CssLink });
});
router.get('/doctor-portal-calendar', (req, res) => {
    const Title = "Calendar";
    const CssLink = 'Doctor-Portal-Calendar';
    res.render('Doctor/doctor-portal-calendar', { Title, CssLink });
});
router.get('/doctor-portal-patient-list', (req, res) => {

    const Title = "Patient List";
    const CssLink = 'Doctor-Portal-Patient-List';
    res.render('Doctor/doctor-portal-patient-list', { Title, CssLink });
});

router.get('/doctor-portal-patient-profile', (req, res) => {
    const Title = "Patient Profile";
    const CssLink = 'Doctor-Portal-Patient-Profile';
    res.render('Doctor/doctor-portal-patient-profile', { Title, CssLink });

});

router.get('/doctor-portal-standard', (req, res) => {
    const Title = "Standard";
    const CssLink = 'Doctor-Portal-Standard';
    res.render('Doctor/doctor-portal-standard', { Title, CssLink });
});

router.get('/doctor-portal-feedback', (req, res) => {
    const Title = "Feedback";
    const CssLink = 'Doctor-Portal-Feedback';
    res.render('Doctor/doctor-portal-feedback', { Title, CssLink });
});

router.get('/doctor-portal-chat-choose', (req, res) => {
    const Title = "Chat";
    const CssLink = 'Doctor-Portal-Chat-Choose';
    res.render('Doctor/doctor-portal-chat-choose', { Title, CssLink });
});

router.get('/doctor-portal-settings', (req, res) => {
    const Title = "Settings";
    const CssLink = 'Doctor-Portal-Settings';
    res.render('Doctor/doctor-portal-standard', { Title, CssLink });
});
router.get('/*', (req, res) => {
    const Title = "404";
    const CssLink = 'Doctor-Portal-Standard';
    res.render('Doctor/doctor-portal-standard', { Title, CssLink });
});

module.exports = router;