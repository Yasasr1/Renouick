// all routes related to user registration
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

//customer schema
let Customer = require('../models/Customer.model');
//worker schema
let Worker = require('../models/Worker.model');
//user schema
let User = require('../models/User.model');
//admin schema
let Admin = require('../models/Admin.model');

// @route POST registration/addCustomer
// @desc register new customer
router.post('/addCustomer', (req,res) => {
    //check if customer already exists
    Customer.findOne({email: req.body.email})
        .then(user => {
            console.log(user);
            if(user) {
                return res.status(400).json({'error': 'user already exists'});
            }
            else {
                let customer = req.body;
                //create salt and hash
                bcrypt.genSalt(10,(err, salt)=>{
                    bcrypt.hash(customer.password, salt, (err, hash)=>{
                        if(err)
                            console.log(err);
                        customer.password = hash;
                        let newCustomer = new Customer(customer);
                        newCustomer.save()
                    .then(worker => {
                        res.status(200).json({'customer': 'customer successfuly registered'});
                    })
                    .catch(err => {
                        res.status(400).send('adding new customer failed');
                    });
                    })
                })
            }
        })
})

// @route POST registration/addWorker
// @desc register new worker
router.post('/addWorker', (req,res) => {
    //check if worker already exists
    Worker.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).send({'error':'user already exists'});
            }
            else {
                let worker = req.body;
               //create salt and hash
                bcrypt.genSalt(10,(err, salt)=>{
                    bcrypt.hash(worker.password, salt, (err, hash)=>{
                        if(err)
                        console.log(err);
                        worker.password = hash;
                        let newWorker = new Worker(worker);
                        newWorker.save()
                    .then(worker => {
                        res.status(200).json({'worker': 'Worker succesfully registered'});
                    })
                    .catch(err => {
                        res.status(400).send('adding new wroker failed');
                    });
                    })
                })
            }
        });
})

// @route POST registration/addWorker
// @desc register new worker
router.post('/addAdmin', (req,res) => {
    //check if worker already exists
    Admin.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).send({'error': 'user already exists'});
            }
            else {
                let admin = req.body;
                //create salt and hash
             bcrypt.genSalt(10,(err, salt)=>{
                bcrypt.hash(admin.password, salt, (err, hash)=>{
                    if(err)
                       console.log(err);
                    admin.password = hash;
                    let newAdmin = new Admin(admin);
                    newAdmin.save()
                   .then(worker => {
                       res.status(200).json({'admin': 'admin registered'});
                   })
                   .catch(err => {
                       res.status(400).send('adding new admin failed');
                   });
                })
            })
            }
        });
})

//@route POST registration/addUser
//@add user info to users schema
router.post('/addUser', (req,res) => {
     //check if worker already exists
     User.findOne({email: req.body.email})
     .then(user => {
         if(user) {
             return res.status(400).send('user already exists');
         }
         else {
             let user = req.body;
             
             //create salt and hash
             bcrypt.genSalt(10,(err, salt)=>{
                 bcrypt.hash(user.password, salt, (err, hash)=>{
                     if(err)
                        console.log(err);
                     user.password = hash;
                     let newUser = new User(user);
                     newUser.save()
                    .then(worker => {
                        res.status(200).json({'user': 'also added to user'});
                    })
                    .catch(err => {
                        res.status(400).send('adding new wroker failed');
                    });
                 })
             })

             
         }
     });
})

module.exports = router;