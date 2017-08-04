const router = require('express').Router();
const inventoryModel = require('../models/data')
const bodyParser = require('body-parser');

router.get('/schedule', function(req, res) {
  inventoryModel.getEmployeeSchedule(function(err, data) {
    res.render('employeeschedule', { schedule: data });
  });
});

router.get('/addemployee',function(req, res) {
  res.render('addemployee');
});

router.get('/editemployee', function(req, res) {
  res.render('editemployee');
});

router.post('/schedule', function(req, res) {
  inventoryModel.insertEmployee(req.body, function (err, result) {
    res.redirect('/schedule');
  });
});

module.exports = router;
