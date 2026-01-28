const fs = require('fs');

// Define two variables
let a = 10;
let b = 5;

// Basic arithmetic operations
let sum = a+b;
let product = a*b;

// Prepare data to write
let data = `Sum : ${sum}\nProduct : ${product}`;
console.log(data);

//Write data to a local file
fs.writeFile('output.txt' , data , (err) => {
  if (err) throw err;
  else console.log('Data written to file')
})

// fs.writeFile("output.txt" , "Writing File" , (err) => {
//   if (err) console.log("Error occured");
//   else console.log("File written successfully");
// });