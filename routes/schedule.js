const express = require('express')
const router = require('express').Router();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const inventoryModel = require('../models/data');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


router.get('/schedule', function(req, res) {
  inventoryModel.getEmployeeSchedule(function(err, data) {
    res.render('employeeschedule', { schedule: data });
  });
});

router.get('/addemployee', function(req, res) {
  res.render('addemployee');
});

router.get('/editemployee/:id', function(req, res) {
  inventoryModel.editEmployee(req.params.id, function(err, data) {
    res.render('editemployee', data);
  });
});

router.post('/schedule', function(req, res) {
  req.check('name', 'Name can not be empty').notEmpty();

  req.getValidationResult().then(function(result) {
    if(result.isEmpty()) {
      //  we are valid.

    } else {
      // we are not valid.
      console.log('There was an error!')
      data.errors = result.array();
    }
    inventoryModel.insertEmployee(req.body, function (err, result) {
      res.redirect('/schedule');
    });
  });
});

module.exports = router;
