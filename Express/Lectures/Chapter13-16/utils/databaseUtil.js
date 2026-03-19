// const mongo = require('mongodb');
const {MongoClient} = require('mongodb');
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
  .then((client) => {
    _db = client.db('airbnb');
    console.log("connected to mongo db successfully");
    if (typeof callback === 'function') callback(client);
    
  }).catch(err => {
    console.error("Error while connecting to mongo db", err);
  })
}

const getDB = () => {
  if(!_db){
    throw new Error("No database found!");
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;