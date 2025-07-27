

import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

let PORT = process.env.PORT || 7001;

let app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS configuration for allowing frontend connections
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174/'], // This allows only the frontend at localhost:5173
    credentials: true, // Important for cookies and session handling
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is your backend server!');
});

// Server connection
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDb();
});
