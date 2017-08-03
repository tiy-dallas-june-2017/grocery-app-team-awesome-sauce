const router = require('express').Router();

router.get('/schedule', function(req, res) {
  res.render('employeeschedule');
});

module.exports = router;
