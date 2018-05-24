const express = require('express');
const bodyParser = require('body-parser');
var app = express();
    port = process.env.PORT || 3000;
var mongoose = require('mongoose'),
    consts =require('./consts');
var controller = require('./controller');

app.use(express.static('public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection to database
mongoose.connect(consts.MLAB_KEY)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
    console.log(`connection error: ${err}`);
});
//creating routes
app.get('/authors', controller.findAllAuthors); // Get all authors - get method
app.post('/authors/authordata', controller.getAuthorProfileData);// Get author by id - post method
app.get('/:genre/:year', controller.findAuthorByGenreAndYear);//Get author by genre and publication year
app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html');});// index.html
app.get('*', (req, res) => {res.json("no such page");}); // wrong route error page

app.listen(port);// listening on port 3000