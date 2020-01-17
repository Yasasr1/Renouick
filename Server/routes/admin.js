// all routes related to admin dashboard info
const express = require('express');
const router = express.Router();
//customer schema
const Customer = require('../models/Customer.model');
const Worker = require('../models/Worker.model');
const auth = require('../middleware/authMiddleware');
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







module.exports = router;