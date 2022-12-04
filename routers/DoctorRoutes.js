const express = require('express');
const router = express.Router();
const DoctorModel = require('../Models/DoctorModel');
const PatientModel = require('../Models/PatientModel');
const calendar = require('node-calendar');
const cal = new calendar.Calendar(calendar.SUNDAY);
router.get('/add-doctor', (req, res) => {
    const Title = 'Doctor';
    const CssLink = 'add-doctor'
    res.render('Doctor/add-doctor', { Title, CssLink });
});
router.post('/add-doctor', async(req, res) => {
    const Doctor = new DoctorModel({
        Qualification: req.body.AddDoc.qualification,
        Specialization: req.body.AddDoc.specialization,
        Experience: req.body.AddDoc.experience,
        Department: req.body.AddDoc.department,
        Domain: req.body.AddDoc.Domain,
        BriefDescription: req.body.AddDoc.briefdoctor,
    });
    await Doctor.save();
    res.redirect(`/doctor/${Doctor._id}`);

});
router.get('/:id', async(req, res) => {
    const Title = "Home";
    const CssLink = 'Doctor-Portal';
    const { id } = req.params;
    const date = new Date();
    const Month = date.getMonth();
    const Year = date.getFullYear();
    const MonthName = calendar.month_name[Month]
    const Doctor = await DoctorModel.findById(id);
    res.render('Doctor/Doctor-Portal', { Title, CssLink, Doctor, MonthName, Year });
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
    console.log(Doctor)
    console.log(req.body);
    const { temp, pulse } = req.body;
    Doctor.Temperature = temp;
    Doctor.PulseRate = pulse;
    await Doctor.save();
    console.log(Doctor)
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
router.post('/:id/doctor-portal-feedback', async(req, res) => {

    const DoctorId = req.params.id;
    const Doctor = await DoctorModel.findById(DoctorId);
    const DocFeedback = req.bodyDocFeed;
    console.log(DocFeedback);
    res.redirect(`/doctor/${Doctor._id}/doctor-portal-feedback`);
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