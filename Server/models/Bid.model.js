const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bid = new Schema({
    amount : {
        type: Number
    },
    poster: {
        type: String
    },
    jobId: {
        type: String
    },
    status: {
        type: String
    },
    postDate: {
        type: Date
    }
});

module.exports = mongoose.model('Bid', Bid);