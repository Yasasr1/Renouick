// all routes related to reports
const express = require('express');
const router = express.Router();

//report model
const Report = require('../models/Report.model');

//@route POST /report/post
//@desc add a new report
//@access private
router.post('/post', (req, res) => {
    let report = new Report(req.body);
    console.log(report);
    report.save()
    .then(job => {
        res.status(200).json({'report': 'report posted successfully'});
    })
    .catch(error => {
        res.status(400).send('adding new report failed');
    })
})





module.exports = router;