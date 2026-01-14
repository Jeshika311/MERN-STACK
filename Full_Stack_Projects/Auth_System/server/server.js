import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/auth_routes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
connectDB();

const allowedOrigins = ['http://localhost:5173']
app.use(cors({origin:allowedOrigins, credentials: true}))

app.get('/', (req,res) => res.send("API working"));
app.use('/api/auth', authRouter);
app.use('/api/user' , userRouter);

app.listen(PORT, () => {
  console.log(`Server started http://localhost:${PORT}`);
});
