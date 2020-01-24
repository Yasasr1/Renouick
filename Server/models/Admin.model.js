const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    contactNumber: {
        type: String
    },
    email : {
        type: String
    },
    username: {
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
});

module.exports = mongoose.model('Admin', Admin);

