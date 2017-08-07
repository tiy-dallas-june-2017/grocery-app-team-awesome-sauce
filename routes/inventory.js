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
router.get('/inventorydetail/:_id', function(req, res){
  console.log('in router for getting detail')
  inventoryModel.getOne(function(err, data){
    res.render('inventorydetail', { inventory : data});
  })
});

//get inventory detail for adding items
router.get('/inventorydetail', function(req, res){
  console.log('in router for getting add inventory')
    res.render('inventorydetail');
});

//for editing an inventory item...
router.get('/inventoryedit/:_id', function(req, res){
  inventoryModel.getOne(req.params._id, function(err, data){
  console.log('in router for getting edit inventory')
    res.render('inventoryedit', data);
  });
});

//posting to inventory database instance.
//handles post actions from edit page via edit button.
router.post('/inventory',function(req, res){
  inventoryModel.insert(req.body,function(err, result){
    res.redirect('/inventory');
    // will redirect to inventory page with each submit.
  })
});

//delete by id from inventorydetails page via delete button.
//after deletion, go back to inventory.
router.post('/inventoryedit/:_id', function(req, res) {
  inventoryModel.remove(req.params.id, function(err, result) {
    res.render('inventory');
  });
});

module.exports = router;
