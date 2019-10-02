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
    facebook: {
        type: String
    },
    twitter: {
        type: String
    }
});

module.exports = mongoose.model('Customer', Customer);

