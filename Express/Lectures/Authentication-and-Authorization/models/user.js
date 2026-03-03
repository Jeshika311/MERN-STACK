const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jeshikasharma07:jashan_20@portfolio.otqbyr.mongodb.net/auth?retryWrites=true&w=majority&appName=Portfolio");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("User" , userSchema);