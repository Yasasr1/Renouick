// all routes related to worker info
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
//worker schema
const Worker = require('../models/Worker.model');
//user schema
const User = require('../models/User.model');
const auth = require('../middleware/authMiddleware');
//for deleting pictures
var cloudinary = require('cloudinary');


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

//@route POST /worker/updatePw
//@desc update worker password
//@access private
router.post('/updatePw', (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    Worker.findOne({email: email}, (err, worker) => {
        if(!worker) {
            res.status(404).send('user is not found');
        }
        else {
            //create salt and hash
            bcrypt.genSalt(10,(err, salt)=>{
                bcrypt.hash(password, salt, (err, hash)=>{
                    if(err)
                        console.log(err);
                    worker.password = hash;
                    let newWorker = new Worker(worker);
                    newWorker.save()
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

//@route POST /worker/updatePic
//@desc update worker profile picture
//@access private
router.post('/updatePic', (req,res) => {
    const newPic = req.body;
    Worker.findOne({email: newPic.email}, (err,worker) => {
        if(!worker) {
            res.status(404).send('user is not found');
        } else {
            worker.profilePicUrl = newPic.url;
            worker.profilePicId = newPic.publicId;
            worker.save().then(responce => {
                res.json("profile picture updated")
            })
            .catch(err => {
                res.status(400).end("Update not possible");
            })
        }
    })
})



//@route POST /worker/deletePic
//@desc delete worker profile picture
//@access private
router.post('/deletePic', (req, res) => {
    const email = req.body.email
    Worker.findOne({email: email}, (err,worker) => {
        if(!worker) {
            res.status(404).send('user is not found');
        } else {
            cloudinary.v2.uploader.destroy(worker.profilePicId, (res, error) => {
                console.log(res);
                console.log(error);
            });
            worker.profilePicUrl = '';
            worker.profilePicId = '';
            worker.save().then(responce => {
                res.json("profile picture deleted")
            })
            .catch(err => {
                res.status(400).end("delete not possible");
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