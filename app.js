const express = require('express');
const mustache = require('mustache-express');
const router = require('express').Router();
const expressValidator = require('express-validator');
const schedule = require('./routes/schedule');
const inventory = require('./routes/inventory');
const mongo = require('./mongo');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.engine('mustache', mustache() );

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', schedule);

app.use('/', inventory);
//through inventory.js in routes

//this now has my server name. --Stefanie
let url = "mongodb://localhost:27017/inventorydb";
mongo.connect(url, function(err, database){
  if(err) {
    console.log("error", err);
    throw err;
  }
  app.listen(4040, function(){
    console.log('listening to port 4040');
  });
})

// app.listen(4040, function(){
//   console.log('listening to port 4040');
// });
