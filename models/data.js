const mongo = require('../mongo');



/////////////////////
//inventory

//get ALL inventory from collection 'inventory' witin db.
function getAllInventory(callback){
const db = mongo.db();
db.collection('inventory').find({}).toArray(function(err, data){
  callback(err, data);
  })
}

//for getting one by id
function getOne(callback){
const db = mongo.db();
db.collection('inventory').find({ _id : new mongo.objectID(id) }, function(err, data){
  callback(err, data);
  })
}

//insertion
function insert(callback){
  const db = mongo.db();
  db.collection('inventory').insert(item, function(err, result){
    console.log(err, result);
    callback(err, result);
  })
}

//needs deletion function.
/////////////////////////





module.exports = {
getAllInventory: getAllInventory,
insert : insert

}
