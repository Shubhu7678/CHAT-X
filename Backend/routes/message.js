import express from 'express';
const router = express.Router();

import { auth } from '../middleware/auth.js';

import { sendMessage , getMessages} from '../controllers/message.js'

router.post('/sendMessage/:receiverId', auth, sendMessage);
router.get('/getMessages/:receiverId', auth, getMessages);

export default router;