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
   status: {
       type: String
   }
});

module.exports = mongoose.model('Job', Job);