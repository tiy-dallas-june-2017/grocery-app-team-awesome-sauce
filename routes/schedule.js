const router = require('express').Router();

router.get('/schedule', function(req, res) {
  res.render('employeeschedule');
});

router.get('/schedule/editschedule', function(req, res){
  res.render('addSchedule')
});

module.exports = router;
