const router = require('express').Router();
const inventoryModel = require('../models/data');
const bodyParser = require('body-parser');

//gets for inventory and inventory detail.
router.get('/inventory', function(req, res){
  console.log('in router for getting all inventory')
  inventoryModel.getAllInventory(function(err, data){
    console.log(data);
    res.render('inventory', { inventory : data});
  })
});

//get just one for editing purposes.
router.get('/inventorydetail/:id', function(req, res){
  console.log('in router for getting detail')
  inventoryModel.getOne(function(err, data){
    res.render('inventorydetail', { inventory : data});
  })
});

//posting and deleting to inventory database instance.
router.post('/inventory',function(req, res){
  inventoryModel.insert(req.body,function(err, result){
    res.redirect('/inventory');
  });
});

//handles post actions from index.
router.post('/inventory/add',function(req, res){
  inventoryModel.insert(req.body,function(err, result){
    res.redirect('/inventory'); // will redirect to inventory page with each submit.
  })
});

router.post('/delete/:id', function(req, res) {
  inventoryModel.remove(req.params.id, function(err, result) {
    res.render('inventorydetail');
  });
});

router.get('/inventory/add/:id', function(req, res){
  // inventoryModel.insert(req.params.id,function(err, result){
  res.render('inventorydetail');
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
