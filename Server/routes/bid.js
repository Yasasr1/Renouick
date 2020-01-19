// all routes related to bids
const express = require('express');
const router = express.Router();
//bid schema
const Bid = require('../models/Bid.model');
//job schema
const Job = require('../models/Job.model');

const auth = require('../middleware/authMiddleware');

//@route POST /bid/add
//@desc add a new bid
//@access private
router.post('/add', (req, res) => {
    let bid = new Bid(req.body);
    bid.save()
    .then(bid => {
        res.status(200).json({'bid': 'bid placed successfully'});
    })
    .catch(error => {
        res.status(400).send('adding new bid failed');
    })
});

router.get('/getBids', auth, (req, res) => {
    const id = req.query.id
    Bid.find({jobId: id }, (err, bids) => {
        if(err)
            console.log(err);
        else    
            res.json(bids);    
    })
    
})

//@route GET /bid/getLatest
//@desc get latest bid info
//@access private
router.get('/getLatest', auth, (req,res)=> {
    const email = req.query.email;
    let jobId;
    let details = {
        jobTitle: "",
        jobPoster: "",
        price: 0,
        status: ""
    }
    //console.log(email);
    Bid.findOne({poster:email},null,{ "sort": { "_id": -1 } },(err,bid)=> {
        if(err)
            console.log(err);
        //console.log(bid);
        jobId = bid.jobId;
        details.price = bid.amount;
        details.status = bid.status;
        //console.log(details);
        //console.log("before job find"+jobId);
        Job.findOne({_id:jobId},(err,job)=>{
            if(err)
                console.log(err);
            //console.log(job.title);
            //console.log(job.poster);
            details.jobTitle = job.title;
            details.jobPoster = job.poster;
            console.log(details);

            res.json(details);

                 
            
            
        })

    })
    
        
    
})



module.exports = router;