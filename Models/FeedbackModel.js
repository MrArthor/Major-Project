const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    FullNameName: String,
    Email: String,
    Message: String,
});

module.exports = mongoose.model('FeedbackModel', FeedbackSchema);