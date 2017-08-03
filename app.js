const express = require('express');
const mustache = require('mustache-express');

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
});
