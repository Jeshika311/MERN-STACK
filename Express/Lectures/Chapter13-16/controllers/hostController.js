const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
    isLoggedIn: req.session.isLoggedIn
  });
};

exports.getEditHome = (req, res, next) => {
  const homeID = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeID).then(home => {
    if(!home){
      console.log("Home not found with id : ", homeID);
      return res.redirect("/host/host-home-list");
    }
    console.log(homeID, editing , home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your home",
      currentPage: "host-homes",
      editing: editing,
      isLoggedIn: req.session.isLoggedIn,
      homeId: homeID
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then(registeredHomes =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
      isLoggedIn: req.session.isLoggedIn
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home({houseName, price, location, rating, photoUrl});
  home.save().then(() => {
    console.log("Home Updated ");
  });

  res.redirect("/host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description} = req.body;
  Home.findById(id).then((home) => {
    home.houseName = houseName;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.photoUrl = photoUrl;
    home.description = description;
    home.save().then((result) => {
      console.log("Home Updated ");
    }).catch(err =>{
      console.log("Error while updating home : ", err);
    })
    res.redirect("/host/host-home-list");
  }).catch(err => {
    console.log("Error while finding home : ", err);
  })
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete : " , homeId);
  Home.findByIdAndDelete(homeId)
  .then(() => {
    res.redirect("/host/host-home-list");
  })
  .catch((error) => {
    console.log("Error while deleting home : ", error);
  });
};