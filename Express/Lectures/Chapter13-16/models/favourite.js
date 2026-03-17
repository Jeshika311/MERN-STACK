const mongoose = require('mongoose');
const favouriteSchema = mongoose.Schema({
  houseId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Home',
    required : true,
    unique : true
  }
});

module.exports = mongoose.model('Favourite', favouriteSchema);



// module.exports = class Favourite {
//   constructor(houseId) {
//     this.houseId = houseId;
//   }

//   save() {
//     const db = getDB();

//     return db.collection('favourites').findOne({ houseId : this.houseId }).then( existingFav => {
//       if(!existingFav){
//         return db.collection('favourites').insertOne(this);
//       }
//       return Promise.resolve();
//     });
//   }

//   static getFavourites() {
//     const db = getDB();
//     return db.collection('favourites').find().toArray();
//   }

//   static deleteById(delhomeId) {
//     const db = getDB();
//     return db.collection('favourites').deleteOne({ houseId : delhomeId });
//   }
// }





// // Core Modules
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");
// const { register } = require("module");

// const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

// module.exports = class Favourite {

//   static addToFavourites(homeId , callback) {
//     Favourite.getFavourites((favourites) => {
//       if(favourites.includes(homeId)){
//         callback("Home is already in favourites");
//       }
//       else{
//         favourites.push(homeId);
//         fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
//       }
//     });
//   }

//   static getFavourites(callback) {
//     fs.readFile(favouriteDataPath, (err, data) => {
//       callback(!err ? JSON.parse(data) : []);
//     });
//   }

//   static deleteById(delhomeId, callback) {
//     Favourite.getFavourites((homeIds) => {
//       homeIds = homeIds.filter(homeId => delhomeId !== homeId);
//       fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
//     });
//   }
// }