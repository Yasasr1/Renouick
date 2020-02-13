// all routes related to admin dashboard info
const express = require('express');
const router = express.Router();
//customer schema
const Customer = require('../models/Customer.model');
const Worker = require('../models/Worker.model');
const auth = require('../middleware/authMiddleware');
const Job = require('../models/Job.model');
//for deleting pictures


//@route GET /admin/getcount
//@desc get all info of a specific customer,worker
//@access private
router.get('/getCountCustomer',(req,res)=>{
    //console.log("NOT received");
    Customer.countDocuments((err,customerNumber)=>{
        if(err){
            console.log(err);
        }
        console.log(customerNumber);
        res.json(customerNumber);
    })

    
})

//@route GET /admin/getcount
//@desc get all info of a specific customer,worker
//@access private
router.get('/getCountWorker',(req,res)=>{
    //console.log("NOT received");
    Worker.countDocuments((err,workerNumber)=>{
        if(err){
            console.log(err);
        }
        res.json(workerNumber);
    })

    
})

//@route GET /admin/get job pending count
//@desc get all info of a specific pending job
//@access private
router.get('/getCountPJob',(req,res)=>{
    //console.log("NOT received");
    Job.countDocuments({status:"pending"},(err,jobNumber)=>{
        if(err){
            console.log(err);
        }
        console.log(jobNumber);
        res.json(jobNumber);
    })

    
})

//@route GET /admin/get job pending count
//@desc get all info of a specific pending job
//@access private
router.get('/getCountCJob',(req,res)=>{
    //console.log("NOT received");
    Job.countDocuments({status:"completed"},(err,jobCNumber)=>{
        if(err){
            console.log(err);
        }
        console.log(jobCNumber);
        res.json(jobCNumber);
    })

    
})

//@route GET /admin/get job pending count
//@desc get all info of a specific pending job
//@access private
router.get('/getCountOJob',(req,res)=>{
    //console.log("NOT received");
    Job.countDocuments({status:"ongoing"},(err,jobONumber)=>{
        if(err){
            console.log(err);
        }
        console.log(jobONumber);
        res.json(jobONumber);
    })

    
})

//@route GET /Users/getAll
//@desc get all users- customers
//@access private
router.get('/getAllCustomers', auth, (req, res) => {
    //const email = req.query.email
    Customer.find((err, customers) => {
        if(err)
            console.log(err);
        else
            console.log(customers);    
            res.json(customers);    
    })
    
})

//@route GET /Users/getAll
//@desc get all users- workers
//@access private
router.get('/getAllWorkers', auth, (req, res) => {
    //const email = req.query.email
    Worker.find((err, workers) => {
        if(err)
            console.log(err);
        else
            console.log(workers);    
            res.json(workers);    
    })
    
})


module.exports = router;