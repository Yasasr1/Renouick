// all routes related to jobs
const express = require('express');
const router = express.Router();
//job schema
const Job = require('../models/Job.model');
const Worker = require('../models/Worker.model');
const auth = require('../middleware/authMiddleware');

//@route POST /job/post
//@desc add a new job
//@access private
router.post('/post', (req, res) => {
    let job = new Job(req.body);
    job.save()
    .then(job => {
        res.status(200).json({'job': 'job posted successfully'});
    })
    .catch(error => {
        res.status(400).send('adding new job failed');
    })
})

//WHEN ACCESSING PARAMS PASSED FROM THE CLIENT - don't use params . use query - eg - req.query.email

//@route GET /job/getAll
//@desc get all jobs posted by a specified user
//@access private
router.get('/getAll', auth, (req, res) => {
    const email = req.query.email
    Job.find({poster: email }, (err, jobs) => {
        if(err)
            console.log(err);
        else    
            res.json(jobs);    
    })
    
})

//@route GET /job/getLatest
//@desc get the latest job posted by a specified user
//@access private
router.get('/getLatest', auth, (req, res) => {
    const email = req.query.email
    Job.find({poster: email }, (err, job) => {
        if(err)
            console.log(err);
        else    
            res.json(job);    
    }).limit(1).sort({$natural:-1})
    
})

//@route GET /job/getEveryJob
//@desc get all the jobs which has a pending state and that is matching to the workers work areas
//@access private
router.get('/getEveryJob',auth, (req, res) => {
    const email = req.query.email
    Worker.find({email: email},{workingCategory: 1,_id: 0}, (err,categories) => {
        if(err)
            console.log(err);
        else    
            {
                var workCategories = categories[0].workingCategory;
                Job.find({status: 'pending', category: {$in: workCategories}}, (err, jobs) => {
                    if(err)
                        console.log(err);
                    else
                        res.json(jobs);
                })
            }
    })
    
})


module.exports = router;