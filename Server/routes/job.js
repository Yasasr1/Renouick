// all routes related to jobs
const express = require('express');
const router = express.Router();
//job schema
const Job = require('../models/Job.model');
const Worker = require('../models/Worker.model');
const Bid = require('../models/Bid.model')
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

//@route GET /job/update
//@desc update job status when a bid is accepted
//@access private
router.post('/update', (req,res) => {
    const info = req.body;
    console.log(info);
    //Job.update({title: "Paint an interior wall"},{$set:{status:"done"}})
    /*Job.update({_id:info.jobId},{status: info.status})
    Job.find({_id:info.jobId}, (err,job)=> {
        if(err)
            console.log(err);
        else
            console.log(job);
    })*/
    Job.updateOne({_id: info.jobId},{$set:{status:info.status,acceptedBid:info.bidid,assignedWorker:info.worker}},(err,res)=> {
        if(err)
            console.log(err);
        console.log("job updated");
    })

    Bid.updateOne({_id: info.bidid},{$set:{status: 'Ongoing'}},(err,res)=>{
        if(err)
            console.log(err);
        console.log("bid updated");
    })
    
})

//@route GET /job/update
//@desc update job status when a bid is accepted
//@access private
router.post('/updateToCompleted', (req,res) => {
    const info = req.body;
    console.log(info);
    Job.updateOne({_id: info.id},{$set:{status:'completed'}},(err,res)=> {
        if(err)
            console.log(err);
        console.log("job updated");
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
        if(categories)    
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


//@route GET /admin/get job pending count
//@desc get all info of a specific pending job
//@access private
router.get('/getCounts',(req,res)=>{
    let email = req.query.email
    let counts = {
        pending: 0,
        Ongoing: 0,
        completed: 0
    }
    Job.countDocuments({assignedWorker: email,status:"completed"},(err,jobNumber)=>{
        if(err){
            console.log(err);
        }
        counts = {
            ...counts,
            completed : jobNumber
        }
        Job.countDocuments({assignedWorker: email,status:"Ongoing"},(err,jobNumber)=>{
            if(err){
                console.log(err);
            }
            counts = {
                ...counts,
                Ongoing : jobNumber
            }
            Bid.countDocuments({poster: email,status:"pending"},(err,jobNumber)=>{
                if(err){
                    console.log(err);
                }
                counts = {
                    ...counts,
                    pending : jobNumber
                }
                res.json(counts);

            })
        })
    })




    
})



//@route GET /job/getOne
//@desc get the job with the given id
//@access private
router.get('/getOne', auth, (req, res) => {
    const id = req.query.id
    Job.findOne({_id: id }, (err, job) => {
        if(err)
            console.log(err);
        else    
            res.json(job);    
    })
    
})


module.exports = router;