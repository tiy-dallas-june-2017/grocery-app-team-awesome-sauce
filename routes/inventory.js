const router = require('express').Router();
const inventory = require('../models/data');

router.get('/todos', function(req, res){
todoModel.getAll(function(err,data){
  res.render('index',{todos: data});
  });
});
router.post('/todos',function(req, res){
  todoModel.insert(req.body,function(err, result){
    res.redirect('/todos');
  });

});
router.post('/todos/delete/:id',function(req,res){
  todoModel.remove(req.params.id, function(err, result){
    res.redirect('/todos');
  });
});

//   const db = mongo.db();
//   db.collection('todos').find({}).toArray(function(err, data){
//     res.render('index',{todos: data});
//   });
// });

module.exports = router;
