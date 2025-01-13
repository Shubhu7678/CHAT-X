import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';
import cors from 'cors';

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.use('/api/v1/user/', userRoutes);
app.use('api/v1/message/', messageRoutes)

app.listen(port, () => {  
    console.log(`Server listening on port ${port}`);
});

connectDB();