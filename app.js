const express = require('express');
const mustache = require('mustache-express');
const expressValidator = require('express-validator');
const schedule = require('./routes/schedule.js');
const inventory = require('./routes/inventory.js');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustache() );

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', schedule);
app.use('/', inventory);
//let url = "mongodb://localhost:27017/";

app.listen(4040, function(){
  console.log('listening to port 4040');
});
