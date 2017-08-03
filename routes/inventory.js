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


//   const db = mongo.db();
//   db.collection('todos').find({}).toArray(function(err, data){
//     res.render('index',{todos: data});
//   });
// });

module.exports = router;
