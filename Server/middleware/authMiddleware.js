//middleware function to check if incomming requests have a valid token
//used to restrict access to protected routes if the user is not authenticated
//to use add as the second argument of the request(get, post req)
const config = require('config');
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    //wxtract the token that will be sent with the request header named x-auth-token
    const token = req.header('x-auth-token');

    //check for token
    if(!token)
        res.status(401).json({msg: 'Unauthorized: no token'});

    try{
        //verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //add user from payload
        req.user = decoded;
        next();

    } catch(e) {
        res.status(400).json({msg: 'Invalid token'});
    }    
}

module.exports = authMiddleware;