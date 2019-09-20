const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const appRoutes = express.Router();

const mongoose = require('mongoose');
//customer schema
let Customer = require('./Customer.model');
//worker schema
let Worker = require('./Worker.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/renouick',{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



//post a new customer to the database
appRoutes.route('/addCustomer').post(function(req, res) {
    let customer = new Customer(req.body);
    customer.save()
        .then(customer => {
            res.status(200).json({'customer': 'customer added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new customer failed');
        });
});

//post a new worker to the database
appRoutes.route('/addWorker').post(function(req, res) {
    let worker = new Worker(req.body);
    worker.save()
        .then(worker => {
            res.status(200).json({'worker': 'worker added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new wroker failed');
        });
})

//get password of given email
appRoutes.route('/login/:email').get(function(req,res) {
    let email = req.params.email;
    Customer.findOne({email: email}, function(err, password) {
        res.json(password);
    });
});


//here reno is the base route. all routes should go through here 
app.use('/reno', appRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});

