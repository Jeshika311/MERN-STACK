import express from 'express';
const userRouter = express.Router();
import { getHome } from '../controllers/homes.js';

// userRouter.get("/" , (req,res,next) => {
//   res.send(
//     `<h1>welcome to airbnb</h1>
//       <a href="/host/add-home">Add home</a>
//   `)  
// })

userRouter.get('/' , getHome);

export default userRouter;

// __dirname , '../' = rootDir