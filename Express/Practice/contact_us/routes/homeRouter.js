const express = require('express');
const homeRouter = express.Router();
const rootDir = require('../utils/pathUtil');
const path = require('path');

homeRouter.get("/" , (req,res,next) => {
  console.log("Handling / for GET" , req.url , req.method);
  res.sendFile(path.join(rootDir , 'views' , 'home.html'));
})

module.exports = homeRouter;