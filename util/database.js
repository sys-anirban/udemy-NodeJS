const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Anirban_2020:ReactJS2020@nodejsudemy.vaj0a.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
    .then((client) => {
      db = client.db();
      console.log("Connected", result);
      callback();
    })
    .catch((err) => {
      console.log("err", err);
      throw "No Database found!";
    });
};
const getDB = () => {
  if (db) {
    return db;
  }
  throw "No Database found!";
};
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
