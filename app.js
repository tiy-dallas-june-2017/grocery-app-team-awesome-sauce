const express = require('express');
const mustache = require('mustache-express');
<<<<<<< HEAD
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.urlencoded({ extended: false }));

app.engine('mustache', mustache() );

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.listen(4040, function(){
  console.log('listening to port 4040')
=======


const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));



const mustacheExpressInstance = mustache();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache');
app.set('views',__dirname + '/views');

app.use(express.static('public'));





  app.listen(4444, function() {
    console.log('Team awesome sauce');
  });
>>>>>>> 1cdee419b2e51d51fc35389a4f91af776a64b4e2
});
