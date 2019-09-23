//routes for authenticating when logging in
const express = require('express');
const router = express.Router();
const config = require('config');
//for json web token
const jwt = require('jsonwebtoken');

//user model
const User = require('../models/User.model');

//@route POST auth
//@desc authenticate user

router.post('/', (req,res) => {
    const { email, password } = req.body;

    //check if the user exist
    User.findOne({email})
        .then(user => {
            if(!user)  
                return res.status(400).json({msg: 'User does not exist'});

            if(password !== user.password)
                return res.status(400).json({msg: 'invalid username or password'});
            else {
                jwt.sign(
                    {id: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                email: user.email,
                                userType: user.userType
                            }
                        });
                    }
                )
            }        
        })
})

module.exports = router;