const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
    address: {
        type: String
    },
    email : {
        type: String
    },
    contactNumber: {
        type: String
    },
    password: {
        type: String
    },
    profilePicUrl: {
        type: String
    },
    profilePicId: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    registrationDate: {
        type: Date
    }
});

module.exports = mongoose.model('Customer', Customer);

