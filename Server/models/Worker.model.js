const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Worker = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
    contactNumber: {
        type: Number
    },
    email : {
        type: String
    },
    password: {
        type: String
    },
    workingCategory: {
        type: Array
    },
    profilePicUrl: {
        type: String
    },
    profilePicId: {
        type: String
    },
    registrationDate: {
        type: Date
    },
    totalStars: {
        type: Number
    },
    numberOfRatings: {
        type: Number
    },
    accountStatus: {
        type: String
    }

});

module.exports = mongoose.model('Worker', Worker);

