import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';
import cors from 'cors';
import { Server } from 'socket.io';
import {createServer} from 'http';

dotenv.config();
const app = express();

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
    }
})

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.use('/api/v1/user/', userRoutes);
app.use('/api/v1/message/', messageRoutes);

io.on('connection', (socket) => {
    
    console.log('New user connected', socket.id);

    socket.on('send-new-message', (message) => { 

        io.emit('new-message', message);
    })
    socket.on('disconnect', () => {

        console.log('User disconnected', socket.id);
    });

})




server.listen(port, () => {  
    console.log(`Server listening on port ${port}`);
});

connectDB();