import express from 'express';
const router = express.Router();

import { signUp, login, getAllUsers } from '../controllers/user.js'
import {auth} from '../middleware/auth.js'


router.post('/signup', signUp);
router.post('/login', login);
router.get('/getAllUsers', auth, getAllUsers);

export default router