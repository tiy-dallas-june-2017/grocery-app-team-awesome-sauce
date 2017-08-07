const express = require('express')
const router = require('express').Router();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

const inventoryModel = require('../models/data');

router.get('/schedule', function(req, res) {
  inventoryModel.getEmployeeSchedule(function(err, data) {
    res.render('employeeschedule', { schedule: data });
  });
});
//Attempted to assign validation to this router. No errors, but not running at the same time.
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

router.get('/editemployee/:id', function(req, res) {
  inventoryModel.editEmployee(req.params.id, function(err, data) {
    console.log(data);
    res.render('editemployee', data);
  });
});

router.post('/schedule', function(req, res) {
  inventoryModel.insertEmployee(req.body, function (err, result) {
    res.redirect('/schedule');
  });
});

module.exports = router;
