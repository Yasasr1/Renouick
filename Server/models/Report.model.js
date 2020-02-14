const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Report = new Schema({
   poster: {
       type: String
   },
   ReportedAbout: {
        type: String
   },
   title: {
       type: String
   },
   description: {
       type: String
   },
   status: {
       type: String
   }
   

});

module.exports = mongoose.model('Report', Report);