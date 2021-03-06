// all routes related to admin dashboard info
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//customer schema
const Admin = require('../models/Admin.model');
const Customer = require('../models/Customer.model');
const Worker = require('../models/Worker.model');
const User = require('../models/User.model');
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
        //console.log(customerNumber);
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
        //console.log(jobNumber);
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
        //console.log(jobCNumber);
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
        //console.log(jobONumber);
        res.json(jobONumber);
    })

    
})

//@route GET /admin/getAccountCounts 
//@desc get accout status counts
//@access private
router.get('/getAccountCounts',(req,res)=>{
    let counts = {
        authorized: 0,
        pending: 0,
        banned: 0
    }
    User.countDocuments({accountStatus:"authorized"},(err,count)=>{
        if(err){
            console.log(err);
        }
        counts.authorized = count;
        //console.log(jobONumber);
        User.countDocuments({accountStatus:"pending"},(err,count2)=>{
            if(err){
                console.log(err);
            }
            counts.pending = count2;
            //console.log(jobONumber);
            User.countDocuments({accountStatus:"banned"},(err,count3)=>{
                if(err){
                    console.log(err);
                }
                counts.banned = count3;
                //console.log(counts);
                res.json(counts);
                
            })
            
        })
        
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
            //console.log(customers);    
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
            //console.log(workers);    
            res.json(workers);    
    })
    
})





//WHEN ACCESSING PARAMS PASSED FROM THE CLIENT - don't use params . use query - eg - req.query.email

//@route GET /admin/getInfo
//@desc get all info of a specific admin
//@access private
router.get('/getInfo', (req, res) => {
    const email = req.query.email
    console.log(email);
    Admin.findOne({email: email }, (err, info) => {
        if(err)
            console.log(err);
        else 
           // console.log(info);   
            res.json(info);    
    })
    
})

//@route POST /admin/updatePw
//@desc update admin password
//@access private
router.post('/updatePw', (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    Admin.findOne({email: email}, (err, admin) => {
        if(!admin) {
            res.status(404).send('user is not found');
        }
        else {
             //create salt and hash
             bcrypt.genSalt(10,(err, salt)=>{
                bcrypt.hash(password, salt, (err, hash)=>{
                    if(err)
                        console.log(err);
                    admin.password = hash;
                    let newAdmin = new Admin(admin);
                    newAdmin.save()
                .then(worker => {
                    res.status(200).json('password updated');
                })
                .catch(err => {
                    res.status(400).send('updating password failed');
                });
                })
            })
        }

    })
    User.findOne({email: email}, (err, user) => {
        if(!user) {
            res.status(404).send('user is not found');
        }
        else {
           //create salt and hash
           bcrypt.genSalt(10,(err, salt)=>{
            bcrypt.hash(password, salt, (err, hash)=>{
                if(err)
                    console.log(err);
                user.password = hash;
                let newUser = new User(user);
                newUser.save()
            .then(worker => {
                res.status(200).json({'user': 'password updated'});
            })
            .catch(err => {
                res.status(400).send('updating password failed');
            });
            })
        })
        }

    })
    
})


//@route POST /Admin/updateAdmin
//@desc update admin info
//@access private
router.post('/updateAdmin', (req,res) => {
    const updatedAdmin = req.body;
    //console.log(updatedAdmin);
    Admin.findOne({email: updatedAdmin.email}, (err,admin) => {
        if(!admin) {
            res.status(404).send('user is not found');
        }
        else {
            admin.firstName = updatedAdmin.firstName;
            admin.lastName = updatedAdmin.lastName;
            admin.contactNumber = updatedAdmin.contactNumber;
            admin.email = updatedAdmin.email;
            admin.password = updatedAdmin.password;
            //console.log(admin);
            admin.save().then(responce => {
                res.json("user info updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})


module.exports = router;