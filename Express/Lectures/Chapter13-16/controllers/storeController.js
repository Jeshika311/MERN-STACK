const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  console.log("Session value " , req.session);
  Home.find().then(registeredHomes =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
      isLoggedIn: req.session.isLoggedIn,
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
      isLoggedIn: req.session.isLoggedIn
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.session.isLoggedIn
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
  .populate('houseId')
  .then(favourites => {
    const favouriteHomes = favourites.map(fav => fav.houseId);

      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
        isLoggedIn: req.session.isLoggedIn
    })
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {

    if(!home){
      console.log("Home not found with id : ", homeId);
      res.redirect("/homes");
    }
    else{
      res.render("store/home-detail", {
        home : home,
        pageTitle: "Home Detail",
        currentPage: "Home",
        isLoggedIn: req.session.isLoggedIn
      });
    }
  });
};

exports.postAddToFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({houseId : homeId}).then((fav) => {
    if(fav) {
      console.log("Already in favourites ", fav);
    }
    else {
      fav = new Favourite({ houseId: homeId });
      fav.save().then(result => {
        console.log("Added to favourites " , result);
      }).catch(err => {
        console.log("Error while adding to favourites" , err);
      }).finally(() => {
        res.redirect("/favourites");
      });
    } 
  }).catch(err => {
    console.log("Error while adding to favourites" , err);
  });
};

exports.postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({houseId : homeId}).then(result => {
    console.log("Removing from favourites " , result);
  }).catch(err => {
    console.log("Error while removing to favourites" , err);
  }).finally(() => {
    res.redirect("/favourites");
  });
};