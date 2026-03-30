import Home from "../models/home.js";

exports.getAddHome = (req,res,next) => {
  res.render("host/addHome" , {pageTitle : "Add home to air bnb" , currentPage : "add-home"});
}

exports.postAddHome = (req,res,next) => {
  // console.log("Home registration succesfull for : " , req.body , req.body.houseName);
  const home = new Home(req.body.houseName , req.body.price , req.body.location , req.body.rating , req.body.photoUrl).save();
  home.save();
  res.render("host/homeAdded" , {pageTitle : "Home added successfully" , homeName : req.body.houseName , registeredHomes : registeredHomes , currentPage : "home-added"} );
}

exports.getHome = (req,res,next) => {
  const regidteredHomes = Home.fetchAll((registeredHomes) => {
    res.render('store/home-list' , {registeredHomes : registeredHomes , pageTitle : 'Airbnb Home' , currentHome : 'Home' });
  });
  // console.log(registeredHomes);
  // res.sendFile(path.join(rootDir , 'views' , 'home.html'));
}
