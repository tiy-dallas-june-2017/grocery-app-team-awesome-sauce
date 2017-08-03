const router = require('express').Router();
const inventoryModel = require('../models/data');

router.get('/inventory', function(req, res){
inventoryModel.getAll(function(err,data){
  res.render('inventory',{inventory: data});
  });
});
router.post('/inventory',function(req, res){
  inventoryModel.insert(req.body,function(err, result){
    res.redirect('/inventory');
  });

});
router.post('/inventory/delete/:id',function(req,res){
  inventoryModel.remove(req.params.id, function(err, result){
    res.redirect('/inventory');
  });
});

//   const db = mongo.db();
//   db.collection('todos').find({}).toArray(function(err, data){
//     res.render('index',{todos: data});
//   });
// });

module.exports = router;
