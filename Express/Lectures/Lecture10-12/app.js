import path from 'path';
import express from 'express';
import { PNF } from './controllers/errors.js';  
import { SWW } from './controllers/errors.js';

import userRouter from './routes/userRouter.js';
import hostRouter from './routes/hostRouter.js';

const app = express();
app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.urlencoded({extended : true}));
app.use(userRouter);
app.use("/host" , hostRouter);
 
app.use(express.static(path.join(__dirname , 'public')));

app.use(PNF);

app.use(SWW);

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});