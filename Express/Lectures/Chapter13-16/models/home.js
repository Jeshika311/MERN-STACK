const mongoose = require('mongoose');
const favourite = require('./favourite');

const homeSchema = mongoose.Schema({
  houseName : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  location : {
    type : String,
    required : true
  },
  rating : {
    type : Number,
    required : true
  },
  photoUrl : {
    type : String,
    required : true
  }
});

homeSchema.pre('findOneAndDelete' , async function(next) {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({houseId : homeId});
  next();
})

module.exports = mongoose.model('Home', homeSchema);


// const {ObjectId} = require('mongodb');

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoUrl, description, _id) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//     this.description = description;
//     if(_id){
//       this._id = _id;
//     }
//   }

//   save() {
//     const db = getDB();

//     if(this._id) {

//       const updateFields = {
//         houseName : this.houseName,
//         price : this.price,
//         location : this.location,
//         rating : this.rating,
//         photoUrl : this.photoUrl,
//         description : this.description
//       };

//       return db.collection('homes').updateOne({_id : new ObjectId (String(this._id))} , {$set : updateFields});
//     }
//     else{
//       return db.collection('homes').insertOne(this);
//     }
    
//   }

//   static find() {
//     const db = getDB();
//     return db.collection('homes').find().toArray();
//   }

//   static findById(homeId) {
//     const db = getDB();
//     return db.collection('homes').find({_id : new ObjectId (String(homeId))}).next();
//   }

//   static deleteById(homeId, callback) {
//     const db = getDB();
//     return db.collection('homes').deleteOne({_id : new ObjectId (String(homeId))});
//   }
// };





// Core Modules
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");
// const Favourite = require("./favourite");
// const homeDataPath = path.join(rootDir, "data", "homes.json");

// module.exports = class Home {
//   constructor(houseName, price, location, rating, photoUrl) {
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrl = photoUrl;
//   }

//   save() {

//     Home.fetchAll((registeredHomes) => {

//       if (this.id) {            // edit home case
//         registeredHomes = registeredHomes.map(home => home._id === this.id ? this : home);
//       }
//       else {           // add home case
//         this.id = Math.random().toString();
//         registeredHomes.push(this);
//       }
  
//       fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
//         console.log("File Writing Concluded", error);
//       });
//     });
//   }

//   static fetchAll(callback) {
//     fs.readFile(homeDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//   static findById(homeId, callback) {
//     this.fetchAll((homes) => {
//       const homeFound = homes.find(home => home._id === homeId);
//       callback(homeFound);
//     });
//   }

//   static deleteById(homeId, callback) {
//     this.fetchAll((homes) => {
//       homes = homes.filter(home => home._id !== homeId);
//       fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
//         Favourite.deleteById(homeId , callback);
//       });
//     });
//   }
// };
