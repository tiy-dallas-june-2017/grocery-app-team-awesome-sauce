const router = require('express').Router();
const inventoryModel = require('../models/data');

router.get('/inventory', function(req, res){

  res.render('inventory');

});

router.get('/inventorydetail', function(req, res){

  res.render('inventorydetail');
});

router.get('/inventory/add/:id', function(req, res){
  // inventoryModel.insert(req.params.id,function(err, result){
  res.render('inventorydetail');
  });



router.post('/inventory/add',function(req, res){
  // inventoryModel.insert(req.params.id,function(err, result){
    res.redirect('/inventory');
  });


router.post('/inventory/delete/:id',function(req,res){
  // inventoryModel.remove(req.params.id, function(err, result){
    res.redirect('/inventory');
  });


//   const db = mongo.db();
//   db.collection('todos').find({}).toArray(function(err, data){
//     res.render('index',{todos: data});
//   });
// });

module.exports = router;
