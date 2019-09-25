// all routes related to jobs
const express = require('express');
const router = express.Router();
//job schema
const Job = require('../models/Job.model');

//@route POST /job/post
//@desc add a new job
router.post('/post', (req, res) => {
    console.log(req.body.postDate);
    let job = new Job(req.body);
    job.save()
    .then(job => {
        res.status(200).json({'job': 'job posted successfully'});
    })
    .catch(error => {
        res.status(400).send('adding new job failed');
    })
})


module.exports = router;