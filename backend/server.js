import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import messageRoute from './routes/messageRoutes.js';
import userRoute from './routes/userRoute.js'
import connectToMongoDB from './db/connectTOMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cookieParser()); // Place this before the routes that need access to cookies

// Test route
app.get('/', (req, res) => {
    res.send('hi');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoute);
app.use('/api/users', userRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`App running on PORT ${PORT}`);
});
