const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Image = new Schema({
   url: {
       type: String
   },
   publicId: {
       type: String
   }
});

module.exports = mongoose.model('Image', Image);