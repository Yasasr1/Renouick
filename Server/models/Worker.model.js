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
    email : {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    workingCategory: {
        type: Array
    }
});

module.exports = mongoose.model('Worker', Worker);

