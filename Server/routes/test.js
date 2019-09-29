// all routes related to jobs
const express = require('express');
const router = express.Router();
var cloudinary = require('cloudinary');

//job schema
const Image = require('../models/image.modal');

cloudinary.config({ 
    cloud_name: 'dgrz2yde1', 
    api_key: '373124526484397', 
    api_secret: 'MjuBJBtXnrkZ3sBy1L922m7CKmM' 
});

//to delete photo
router.post('/', (req, res) => {
    const id = req.body.publicId
    console.log(id);
    cloudinary.v2.uploader.destroy(id, (res, error) => {
        console.log(res);
        console.log(error);
    });
})

module.exports = router;