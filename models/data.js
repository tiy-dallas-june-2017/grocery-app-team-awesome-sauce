const mongo = require('../mongo');

/**************************
  schedule stuff
**************************/

function getEmployeeSchedule(callback) {
  const db = mongo.db();
  db.collection('schedule').find({}).toArray(function(err, data) {
    callback(err, data);
  });
}

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

//insertion// this function is called by inventory.js
function insert(item, callback){
  const db = mongo.db();
  db.collection('inventory').insert(item, function(err, result){
    console.log(err, result);
    callback(err, result);
  })
}

function remove(id, callback){
  const db = mongo.db();
  db.collection('inventory').delete
}





module.exports = {
getAllInventory: getAllInventory,
insert : insert,
getEmployeeSchedule: getEmployeeSchedule,
remove : remove
}
