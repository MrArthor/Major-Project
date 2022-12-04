const express = require('express');
const router = express.Router();
const PatientModel = require('../Models/PatientModel');
const FeedbackModel = require('../Models/FeedbackModel');


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
    res.redirect(`/Patient/${Patient._id}/`);
})

router.get('/:id', (req, res) => {
    const Title = "Patient Portal";
    const CssLink = 'patient-portal'
    const PatientId = req.params.id;
    const Patient = PatientModel.findById(PatientId);
    res.render('Patient/Patient-Portal', { Title, CssLink, Patient })
})

router.get('/:id/vitals-edit-form', async(req, res) => {
    const Title = "Edit Vitals";
    const CssLink = 'vitals-edit-form'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/Vitals-Edit-Form', { Title, CssLink, Patient })
})

router.post('/:id/vitals-edit-form', async(req, res) => {
    const Title = "Edit Vitals";
    const CssLink = 'vitals-edit-form'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    Patient.BloodSugar = req.body.vital.sugar;
    Patient.BloodPressure = req.body.vital.pressure;
    Patient.PulseRate = req.body.vital.pulserate;
    Patient.Temperature = req.body.vital.temp;
    await Patient.save();
    res.send(Patient);
    // res.redirect(`/Patient/${Patient._id}`);
})

router.get('/:id/patient-portal-emr', async(req, res) => {
    const Title = "Patient Portal EMR";
    const CssLink = 'patient-portal-emr'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-emr', { Title, CssLink, Patient })
})

router.get('/:id/patient-portal-calendar', async(req, res) => {
    const Title = "Patient Portal Calendar";
    const CssLink = 'patient-portal-calendar'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-calendar', { Title, CssLink, Patient })
})

router.get('/:id/patient-portal-feedback', async(req, res) => {
    const Title = "Patient Portal Feedback";
    const CssLink = 'patient-portal-feedback'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-feedback', { Title, CssLink, Patient })
})

router.post('/:id/patient-portal-feedback', async(req, res) => {
    const Title = "Patient Portal Feedback";
    const CssLink = 'patient-portal-feedback'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    const Feedback = new FeedbackModel({
        FullName: req.body.feedback.fullname,
        Email: req.body.feedback.email,
        Message: req.body.feedback.feedback,
    });
    await Feedback.save();
    res.redirect(`/Patient/${Patient._id}`);
})

router.get('/:id/patient-portal-chat-app-doc-vol', async(req, res) => {
    const Title = "Patient Portal Chat App";
    const CssLink = 'patient-portal-chat-app-doc-vol'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-chat-app-doc-vol', { Title, CssLink, Patient })
})

router.get('/:id/patient-portal-chat-app-volunteer', async(req, res) => {
    const Title = "Patient Portal Chat App";
    const CssLink = 'patient-portal-chat-app-volunteer'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId)

    res.render('Patient/patient-portal-chat-app-volunteer', { Title, CssLink, Patient })
})

router.get('/:id/patient-portal-chat-app-doctor', async(req, res) => {
    const Title = "Patient Portal Chat App";
    const CssLink = 'patient-portal-chat-app-doctor'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-chat-app-doctor', { Title, CssLink, Patient })
})

router.get('/:id/patient-portal-billing', async(req, res) => {
    const Title = "Patient Portal Billing";
    const CssLink = 'patient-portal-billing'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    res.render('Patient/patient-portal-billing', { Title, CssLink, Patient })

})

router.get('/:id/patient-portal-settings', async(req, res) => {
    const Title = "Patient Portal Settings";
    const CssLink = 'patient-portal-settings'
    const PatientId = req.params.id;
    const Patient = await PatientModel.findById(PatientId);
    if (Patient) {
        res.render('Patient/patient-portal-settings', { Title, CssLink, Patient })
    }

})

router.all('*', (req, res) => {
    const Title = "404";
    const CssLink = 'Patient-portal-billing'
        //  res.send('404 Page Not Found')
    res.render('Patient/Patient-Portal-billing', { Title, CssLink })

})
module.exports = router;