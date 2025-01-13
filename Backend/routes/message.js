import express from 'express';
const router = express.Router();

import { auth } from '../middleware/auth.js';

import { sendMessage , getMessages} from '../controllers/message.js'

router.post('/sendMessage/:id', auth, sendMessage);
router.get('/getMessages/:id', auth, getMessages);

export default router;