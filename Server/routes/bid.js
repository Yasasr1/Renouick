// all routes related to bids
const express = require('express');
const router = express.Router();
//bid schema
const Bid = require('../models/Bid.model');

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



module.exports = router;