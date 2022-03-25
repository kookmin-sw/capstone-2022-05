import express from 'express';
import signUpController from '../controllers/signup-controller';

const router = express.Router();

router.post('/signup', signUpController);

export = router;