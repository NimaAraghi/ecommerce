import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';

// App config
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRoute);

app.get('/', (req, res) => {
    res.send('API Working')
});

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
});