const express = require('express');
const router = express.Router();


router.get('/patient-portal', (req, res) => {
    const Title = "Patient Portal";
    const CssLink = 'patient-portal'
    res.render('Patient/Patient-Portal', { Title, CssLink })
})

router.get('/add-patient', (req, res) => {
    const Title = "Add Patient";
    const CssLink = 'add-patient'
    res.render('Patient/Add-Patient', { Title, CssLink })
})

module.exports = router;