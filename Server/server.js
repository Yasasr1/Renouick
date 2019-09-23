const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//env.port for heroku
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
config = require('config');


//importing all registration routes
const registration = require('./routes/registration');
//importing auth routes
const auth = require('./routes/auth');

//DB config
const db = config.get('mongoURI');



app.use(cors());
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect(db,{useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



//get password of given email
/*appRoutes.route('/login/:email').get(function(req,res) {
    let email = req.params.email;
    Customer.findOne({email: email}, function(err, password) {
        res.json(password);
    });
});*/

//use routes
app.use('/registration', registration);
app.use('/auth', auth);


app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});

