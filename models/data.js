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

function insertEmployee(schedule, callback) {
  const db = mongo.db();
  db.collection('schedule').insert(schedule, function(err, result) {
    callback(err, result);
  });
}

function editEmployee(id, callback) {
  const db = mongo.db();
  db.collection('schedule').findOne({ _id : new mongo.ObjectID(id) }, function(err, data) {
    callback(err, data);
  });
}

function updateEmployee(id, data, callback) {
  console.log(data, id);
  const db = mongo.db();
  db.collection('schedule').updateOne( {_id: new mongo.ObjectID(id)}, {$set: data}, function(err, result) {
    callback(err, result);
  });
}

function removeEmployee(id, data, callback){
  console.log(data, id);
  const db = mongo.db();
  db.collection('schedule').deleteOne({_id: new mongo.ObjectID(id)}, function(err, result){
    callback(err, result);
  });
}

/////////////////////
//inventory
/////////////////////

//get ALL inventory from collection 'inventory' witin db.
function getAllInventory(callback){
const db = mongo.db();
db.collection('inventory').find({}).toArray(function(err, data){
  callback(err, data);
  })
}

//for getting one by id
function getOne(id, callback){
const db = mongo.db();
db.collection('inventory').findOne({ _id : new mongo.ObjectID(id) }, function(err, data){
    console.log('data from id callback in data.js route', err, data);
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

//remove an item from db.
function remove(id, callback){
  const db = mongo.db();
  db.collection('inventory').delete(item, function(err, result){
    console.log(err, result);
    callback(err, result);
  })
}

function edit(id, callback){
  const db = mongo.db();
  db.collection('inventory').update(item, function(err, result){
    callback(err, result);
  })
}




module.exports = {
getAllInventory: getAllInventory,
insert : insert,
getEmployeeSchedule: getEmployeeSchedule,
remove : remove,
insertEmployee: insertEmployee,
edit: edit,
getOne: getOne,
editEmployee,
removeEmployee,
updateEmployee
}
