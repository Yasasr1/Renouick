// all routes related to customer info
const express = require('express');
const router = express.Router();
//customer schema
const Customer = require('../models/Customer.model');
const User = require('../models/User.model');
const auth = require('../middleware/authMiddleware');
//for deleting pictures
var cloudinary = require('cloudinary');




//WHEN ACCESSING PARAMS PASSED FROM THE CLIENT - don't use params . use query - eg - req.query.email

//@route GET /customer/getInfo
//@desc get all info of a specific customer
//@access private
router.get('/getInfo', auth, (req, res) => {
    const email = req.query.email
    Customer.find({email: email }, (err, info) => {
        if(err)
            console.log(err);
        else    
            res.json(info);    
    })
    
})

//@route POST /customer/updatePw
//@desc update customer password
//@access private
router.post('/updatePw', (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    Customer.findOne({email: email}, (err, customer) => {
        if(!customer) {
            res.status(404).send('user is not found');
        }
        else {
            customer.password = password;
            customer.save().then(responce => {
                res.json("password updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }

    })
    User.findOne({email: email}, (err, user) => {
        if(!user) {
            res.status(404).send('user is not found');
        }
        else {
            user.password = password;
            user.save().then(responce => {
                res.json("password updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }

    })
    
})


//@route POST /customer/updateCustomer
//@desc update customer info
//@access private
router.post('/updateCustomer', (req,res) => {
    const updatedCustomer = req.body;
    //console.log(updatedCustomer);
    Customer.findOne({email: updatedCustomer.email}, (err,customer) => {
        if(!customer) {
            res.status(404).send('user is not found');
        }
        else {
            customer.firstName = updatedCustomer.firstName;
            customer.lastName = updatedCustomer.lastName;
            customer.birthday = new Date(updatedCustomer.birthday);
            customer.address = updatedCustomer.address;
            customer.email = updatedCustomer.email;
            customer.username = updatedCustomer.username;
            customer.password = updatedCustomer.password;
            customer.profilePicUrl = updatedCustomer.profilePicUrl;
            customer.profilePicId = updatedCustomer.profilePicId;
            customer.facebook = updatedCustomer.facebook;
            customer.twitter = updatedCustomer.twitter;
            console.log(customer);
            customer.save().then(responce => {
                res.json("user info updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})

//@route POST /customer/updatePic
//@desc update customer profile picture
//@access private
router.post('/updatePic', (req,res) => {
    const newPic = req.body;
    Customer.findOne({email: newPic.email}, (err,customer) => {
        if(!customer) {
            res.status(404).send('user is not found');
        } else {
            customer.profilePicUrl = newPic.url;
            customer.profilePicId = newPic.publicId;
            customer.save().then(responce => {
                res.json("profile picture updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})

//@route POST /customer/deletePic
//@desc delete customer profile picture
//@access private
router.post('/deletePic', (req, res) => {
    const email = req.body.email
    Customer.findOne({email: email}, (err,customer) => {
        if(!customer) {
            res.status(404).send('user is not found');
        } else {
            cloudinary.v2.uploader.destroy(customer.profilePicId, (res, error) => {
                console.log(res);
                console.log(error);
            });
            customer.profilePicUrl = '';
            customer.profilePicId = '';
            customer.save().then(responce => {
                res.json("profile picture deleted")
            })
            .catch(err => {
                res.status(400).end("delete not possible");
            })
        }
    })


    
})



module.exports = router;