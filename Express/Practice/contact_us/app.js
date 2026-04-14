const express = require('express');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const app = express();
const path = require('path');
const rootDir = require('./utils/pathUtil');

app.use(express.urlencoded({extended : true}));
app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next) => {
  res.sendFile(path.join(rootDir , 'views' , '404.html'));
});

app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send("<h1>Something went wrong!</h1>");
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})
