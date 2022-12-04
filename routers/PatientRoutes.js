const express = require('express');
const router = express.Router();
const PatientModel = require('../Models/PatientModel');

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
router.post('/add-patient', async(req, res) => {
    const Title = "Add Patient";
    const CssLink = 'add-patient'
    console.log(req.body);
    const Patient = new PatientModel({
        PreHistory: req.body.Patient.prehistory,
        Age: req.body.Patient.age,
        Treatment: req.body.Treatment,
        BloodGroup: req.body.Patient.bloodgrp,
        BloodSugar: req.body.Patient.BloodSugar,
        BloodPressure: req.body.Patient.bloodprs,
        PulseRate: req.body.Patient.pulserate,
        Weight: req.body.Patient.weight,
        Height: req.body.Patient.height,
    });
    await Patient.save();
    console.log(Patient);
    res.send(Patient);
})

module.exports = router;