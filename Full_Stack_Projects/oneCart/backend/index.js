import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config(); 

let port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  connectDB();
});