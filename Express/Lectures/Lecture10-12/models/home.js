import fs from 'fs';
import path from 'path';
import rootDir from '../utils/path.js';
const registeredHomes = [];

module.exports = class Home {
  constructor(houseName , price , location , rating , photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  } 

  save() {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir , 'data' , 'homes.json');
      fs.writeFileSync(homeDataPath , JSON.stringify(registeredHomes) , (err) => {
        console.log(err) 
      });
    }) 
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir , 'data' , 'homes.json');
    fs.readFile(homeDataPath , (err , data) => {
      console.log("File read : " . err , data);
      if (!err) {
        // registeredHomes = JSON.parse(data);
        callback(JSON.parse(data))      
      }
      else {
        callback([]);
      }
    });
  }
}