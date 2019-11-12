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

module.exports = router;