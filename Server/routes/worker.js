// all routes related to worker info
const express = require('express');
const router = express.Router();
//worker schema
const Worker = require('../models/Worker.model');
//user schema
const User = require('../models/User.model');
const auth = require('../middleware/authMiddleware');


//@route GET /worker/getAll
//@desc get all workers
//@access private
router.get('/getAll', auth, (req,res) => {
    Worker.find((err,workers) => {
        if(err)
            console.log(err);
        else    
            res.json(workers);
    })
})

//@route GET /worker/getPending
//@desc get all pending workers
//@access private
router.get('/getPending', (req,res) => {
    Worker.find({accountStatus: 'pending'},(err,workers) => {
        if(err)
            console.log(err);
        else    
            res.json(workers);
    })
})

//@route GET /worker/getInfo
//@desc get all info of a specific worker
//@access private
router.get('/getInfo', auth, (req, res) => {
    const email = req.query.email
    Worker.find({email: email }, (err, info) => {
        if(err)
            console.log(err);
        else    
            res.json(info);    
    })
    
})

//@route GET /worker/getSomeInfo
//@desc get all info of a specific worker
//@access private
router.get('/getSomeInfo', (req, res) => {
    const email = req.query.email
    Worker.find({email: email }, (err, info) => {
        if(err)
            console.log(err);
        else    
            res.json(info);    
    })
    
})

//@route POST /worker/addRating
//@desc add a rating
//@access private
router.post('/addRating', (req,res) => {
    const rating = req.body;
    console.log(rating);
    Worker.findOne({email: rating.email}, (err,worker) => {
        if(!worker) {
            res.status(404).send('user is not found');
        }
        else {
           worker.totalStars = rating.totalStars;
           worker.numberOfRatings = rating.numberOfRatings
            //console.log(worker);
            worker.save().then(responce => {
                res.json("user info updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})


//@route POST /worker/updateWorker
//@desc update worker info
//@access private
router.post('/updateWorker', (req,res) => {
    const updatedWorker = req.body;
    console.log(updatedWorker);
    Worker.findOne({email: updatedWorker.email}, (err,worker) => {
        if(!worker) {
            res.status(404).send('user is not found');
        }
        else {
            worker.firstName = updatedWorker.firstName;
            worker.lastName = updatedWorker.lastName;
            worker.birthday = new Date(updatedWorker.birthday);
            worker.email = updatedWorker.email;
            worker.contactNumber = updatedWorker.contactNumber;
            worker.password = updatedWorker.password;
            worker.profilePicUrl = updatedWorker.profilePicUrl;
            worker.profilePicId = updatedWorker.profilePicId;
            worker.facebook = updatedWorker.facebook;
            worker.twitter = updatedWorker.twitter;
            //console.log(worker);
            worker.save().then(responce => {
                res.json("user info updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})

//@route POST /worker/delete
//@desc delete worker account
//@access private
router.post('/delete', (req,res) => {
    const email = req.body.email;
    console.log(email);
    Worker.deleteOne({email: email}, (err,res) => {
        if(err) {
           console.log(err);
        } else {
            console.log(res);
        }
    })

    User.deleteOne({email: email}, (err,res) => {
        if(err) {
            console.log(err);
        } else {
            console.log(res);
        }
    })
})

//@route POST /worker/approve
//@desc accept a worker join request
//@access private
router.post('/approve', (req,res) => {
    const email = req.body.email;
    console.log(email);
    Worker.updateOne({email: email},{$set: {accountStatus: 'authorized'}}, (err,res) => {
        if(err) {
           console.log(err);
        } else {
            console.log(res);
        }
    })

    User.updateOne({email: email},{$set: {accountStatus: 'authorized'}}, (err,res) => {
        if(err) {
           console.log(err);
        } else {
            console.log(res);
        }
    })

})

//@route POST /worker/decline
//@desc decline a worker join request
//@access private
router.post('/decline', (req,res) => {
    const email = req.body.email;
    console.log(email);
    Worker.updateOne({email: email},{$set: {accountStatus: 'banned'}}, (err,res) => {
        if(err) {
           console.log(err);
        } else {
            console.log(res);
        }
    })

    User.updateOne({email: email},{$set: {accountStatus: 'banned'}}, (err,res) => {
        if(err) {
           console.log(err);
        } else {
            console.log(res);
        }
    })

})




module.exports = router;