// all routes related to user registration
const express = require('express');
const router = express.Router();

//customer schema
let Customer = require('../models/Customer.model');
//worker schema
let Worker = require('../models/Worker.model');
//user schema
let User = require('../models/User.model');

// @route POST registration/addCustomer
// @desc register new customer
router.post('/addCustomer', (req,res) => {
    //check if customer already exists
    Customer.findOne({email: req.body.email})
        .then(user => {
            console.log(user);
            if(user) {
                return res.status(400).send('user already exists');
            }
            else {
                let customer = new Customer(req.body);
                customer.save()
                .then(customer => {
                    res.status(200).json({'customer': 'customer added successfully'});
                })
                .catch(err => {
                    res.status(400).send('adding new customer failed');
                });
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
                return res.status(400).send('user already exists');
            }
            else {
                let worker = new Worker(req.body);
                worker.save()
                .then(worker => {
                    res.status(200).json({'worker': 'worker added successfully'});
                })
                .catch(err => {
                    res.status(400).send('adding new wroker failed');
                });
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
             let user = new User(req.body);
             user.save()
             .then(worker => {
                 res.status(200).json({'user': 'also added to user'});
             })
             .catch(err => {
                 res.status(400).send('adding new wroker failed');
             });
         }
     });
})

module.exports = router;