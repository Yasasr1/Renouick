const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Job = new Schema({
   title: {
       type: String,
   },
   category: {
       type: String
   },
   description: {
       type: String
   },
   postDate: {
       type: Date
   },
   poster: {
       type: String
   },
   contactNumber: {
    type: String
   },
   status: {
       type: String
   },
   acceptedBid: {
       type: String
   },
   assignedWorker: {
       type: String
   },
   images: {
       type: Object
   }

});

module.exports = mongoose.model('Job', Job);