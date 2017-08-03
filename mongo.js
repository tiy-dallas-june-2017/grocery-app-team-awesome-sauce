const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
let database =null;

function connect(url, callback){
//if we have already connected dont do it again.
  if(database !== null){
    return database;
  }

  mongoClient.connect(url, function(err, db){
  database = db;
  callback(err);
  });
}
function db() {
  return database;

}

module.exports = {
  connect: connect,
  db: db,
  ObjectID: ObjectID
};
