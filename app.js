const express = require('express');
const mustache = require('mustache-express');
const expressValidator = require('express-validator');
const schedule = require('./routes/schedule.js');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustache() );

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', schedule);

app.listen(4040, function(){
  console.log('listening to port 4040');
});
