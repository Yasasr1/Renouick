const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    
    email : {
        type: String
    },
    password: {
        type: String
    },
    userType: {
        type: String
    },
    accountStatus: {
        type: String
    }
});

module.exports = mongoose.model('User', User);

