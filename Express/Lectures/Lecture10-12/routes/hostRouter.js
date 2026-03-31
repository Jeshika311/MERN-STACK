import express from 'express';
const hostRouter = express.Router();
import { getAddHome } from '../controllers/homes.js';
import { postAddHome } from '../controllers/homes.js';

// hostRouter.get("/add-home" , (req,res,next) => {
//   res.send(
//     `<h1>Register your home here : </h1>
//     <form action = "/host/add-home" method="POST">
//       <input type="text" name="houseName" placeholder="Name of house" />
//       <input type="submit" />
//     </form>
//   `);
// })

// hostRouter.post("/add-home" , (req,res,next) => {
//   console.log(req.body);
//   res.send(
//     `<h1>Home registered successfully </h1>
//      <a href="/">Go to home</a>
//   `);
// })

hostRouter.get("/add-home" , getAddHome);

hostRouter.post("/add-home" , postAddHome); 

// module.exports = hostRouter;
// module.exports.registeredHomes = registeredHomes;

export default hostRouter;