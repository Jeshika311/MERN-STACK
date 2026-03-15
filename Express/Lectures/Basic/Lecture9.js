// const http = require('http');
const express = require('express');
const requestHandler = require('../user');

const app = express();

// use function is used to add middleware
// if we use "use" method then given path is wildcard

// we can also use get and post method instead of use "use" everywhere

app.get("/" , (req,res,next) => {
  console.log("came in first middleware",req.url , req.method);
  // res.send('<p>Welcome to first middleware</p>');
  next();
})

app.post("/submit-details" , (req,res,next) => {
  console.log("came in second middleware",req.url , req.method);
  res.send('<p>Welcome to complete coding</p>');
})

app.use("/" , (req,res,next) => {
  console.log("came in first middleware",req.url , req.method);
  res.send('<p>Welcome to another middleware</p>');
})

// const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});