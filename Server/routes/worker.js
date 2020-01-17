// all routes related to worker info
const express = require('express');
const router = express.Router();
//customer schema
const Worker = require('../models/Worker.model');
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


module.exports = router;