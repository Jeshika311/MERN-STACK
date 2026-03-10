const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});
 
module.exports = mongoose.model("User" , userSchema);