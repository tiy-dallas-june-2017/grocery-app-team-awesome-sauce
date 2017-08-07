const express = require('express')
const router = require('express').Router();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

router.get('/schedule', function(req, res) {
  res.render('employeeschedule');
});

router.get('/addemployee',function(req, res) {
  req.check('name', 'Name can not be empty').notEmpty();
  //Checks for name input.

  req.getValidationResult().then(function(result){
    if(result.isEmpty()){
      console.log('There was an error!')
    } else {
      res.render('addemployee');
    }
  });
});

module.exports = router;
