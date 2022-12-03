const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    ContactNumber: Number,
    Address: String,
    Type: String,
    Name: String,

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserModel', UserSchema);