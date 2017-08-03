const router = require('express').Router();

router.get('/schedule', function(req, res) {
  res.render('employeeschedule');
});

router.get('/addemployee',function(req, res) {
  res.render('addemployee');
});

module.exports = router;
