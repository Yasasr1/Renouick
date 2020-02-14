//routes for authenticating when logging in
const express = require('express');
const router = express.Router();
const config = require('config');
//for json web token
const jwt = require('jsonwebtoken');

//user model
const User = require('../models/User.model');

const StreamChat = require('stream-chat').StreamChat;

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
            else if(user.accountStatus === 'banned'){
                return res.status(403).json({msg: 'Your account has been banned'});
            }
            else {
                var n = email.indexOf("@");
                var name = email.slice(0, n);
                //console.log(name);
                const client = new StreamChat('', '638khuff8zxc5psdgynxb6x9mkwjmuqt8s6q4kq3t6a9ap7z626f2mtwvk469rkz');
                const chatToken = client.createToken(name);
                jwt.sign(
                    {id: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            chatToken,
                            user: {
                                email: user.email,
                                userType: user.userType,
                                expiresIn: 3600
                            }
                        });
                    }
                )
            }        
        })
})

//@route GET /auth/ban
//@desc ban a user
//@access private
router.post('/ban', (req, res) => {
    const email = req.body.email
    User.updateOne({email: email},{$set: {accountStatus: 'banned'}}, (err, reports) => {
        if(err)
            console.log(err);
        else    
            res.json(reports);    
    })
    
})

module.exports = router;