import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

export = router;
