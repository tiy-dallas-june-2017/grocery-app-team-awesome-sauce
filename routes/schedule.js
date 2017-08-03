const router = require('express').Router();

router.get('/schedule', function(req, res) {
  res.render('employeeschedule');
});

<<<<<<< HEAD
router.get('/schedule/editschedule', function(req, res){
  res.render('addSchedule')
=======
router.get('/addemployee',function(req, res) {
  res.render('addemployee');
>>>>>>> 0ec4df08bfc7e243f3aadf3f491ddbafdd264aae
});

module.exports = router;
