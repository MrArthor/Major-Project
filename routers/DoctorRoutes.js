const express = require('express');
const router = express.Router();
const DoctorModel = require('../Models/DoctorModel');
router.get('/:id', async(req, res) => {
    const Title = "Home";
    const CssLink = 'Doctor-Portal';
    const { id } = req.params;
    const Doctor = await DoctorModel.findById(id);
    res.render('Doctor/Doctor-Portal', { Title, CssLink, Doctor });
});

router.get('/:id/vitals-edit-form-doc', async(req, res) => {
    const Title = "Vitals Edit Form";
    const CssLink = 'Vitals-Edit-Form-Doc';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/vitals-edit-form-doc', { Title, CssLink, Doctor });
});
router.post('/:id/vitals-edit-form-doc', async(req, res) => {
    const Title = "Vitals Edit Form";
    const CssLink = 'Vitals-Edit-Form-Doc';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/vitals-edit-form-doc', { Title, CssLink, Doctor });
});

router.get('/:id/doctor-portal-settings', async(req, res) => {
    const Title = "Settings";
    const CssLink = 'Doctor-Portal-Settings';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-settings', { Title, CssLink, Doctor });
});
router.get('/:id/doctor-portal-calendar', async(req, res) => {
    const Title = "Calendar";
    const CssLink = 'Doctor-Portal-Calendar';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-calendar', { Title, CssLink, Doctor });
});
router.get('/:id/doctor-portal-patient-list', async(req, res) => {

    const Title = "Patient List";
    const CssLink = 'Doctor-Portal-Patient-List';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-patient-list', { Title, CssLink, Doctor });
});

router.get('/:id/doctor-portal-patient-profile', async(req, res) => {
    const Title = "Patient Profile";
    const CssLink = 'Doctor-Portal-Patient-Profile';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-patient-profile', { Title, CssLink, Doctor });

});

router.get('/:id/doctor-portal-standard', async(req, res) => {
    const Title = "Standard";
    const CssLink = 'Doctor-Portal-Standard';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-standard', { Title, CssLink, Doctor });
});

router.get('/:id/doctor-portal-feedback', async(req, res) => {
    const Title = "Feedback";
    const CssLink = 'Doctor-Portal-Feedback';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-feedback', { Title, CssLink, Doctor });
});

router.get('/:id/doctor-portal-chat-choose', async(req, res) => {
    const Title = "Chat";
    const CssLink = 'Doctor-Portal-Chat-Choose';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-chat-choose', { Title, CssLink, Doctor });
});

router.get('/:id/doctor-portal-settings', async(req, res) => {
    const Title = "Settings";
    const CssLink = 'Doctor-Portal-Settings';
    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);

    res.render('Doctor/doctor-portal-standard', { Title, CssLink, Doctor });
});


module.exports = router;