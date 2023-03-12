const mongoose = require('mongoose');
const PatientModel = require('../models/PatientModel');
const Data = require('./MOCK_DATA.js');
const Sex = require('./Sex');
const UserModel = require('../models/UserModel');
const DoctorModel = require('../models/DoctorModel');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/MajorProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    const Doctor = await DoctorModel.find({});
    await PatientModel.deleteMany({});
    const Doctors = await DoctorModel.find({});
    for (let i = 0; i < 10; i++) {

        const Patient = new PatientModel({
            //YOUR USER ID

            Doctor: Doctors[i]._id,
            Age: Data[i].noofpatient % 20,
            Sex: Sex[i].Sex,
            BloodPressure: Data[i].noofpatient % 100,
            Temperature: Data[i].noofpatient % 100,
            PulseRate: Data[i].noofpatient % 100,
            BloodSugar: Data[i].noofpatient % 100,
            BloodGroup: Data[i].noofpatient % 100,
            Weight: Data[i].noofpatient % 200,
            Height: Data[i].noofpatient % 30,
        })
        await Patient.save();
        Doctors[i].PatientId.push(Patient._id);
        await Doctors[i].save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})