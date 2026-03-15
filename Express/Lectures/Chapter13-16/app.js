// Core Module
const path = require('path');

// External Module
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_PATH = "mongodb+srv://jeshikasharma07:jashan_20@portfolio.otqbyr.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Portfolio"

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const authRouter = require('./routes/authRouter');
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions'
});

app.use(express.urlencoded());

app.use(session({
  secret:"Jeshika sharmna",
  resave:false,
  saveUninitialized:true,
  store
}));

app.use((req, res, next) => {
  // console.log('Cookie check middleware' , req.get('Cookie'));
  req.isLoggedIn = req.session.isLoggedIn;
  // console.log(req.session.isLoggedIn);
  next();
});

app.use(authRouter);
app.use(storeRouter);

app.use("/host" , (req, res, next) => {
  if(req.isLoggedIn){
    next();
  } else {
    res.redirect('/login');
  }
});

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose.connect(DB_PATH).then(() => {
  console.log("Connected to mongoDB successfully");
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log("Error connecting to mongoDB", err);
})