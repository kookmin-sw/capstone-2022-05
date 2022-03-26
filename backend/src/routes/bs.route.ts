import express from 'express';
import BSController from '../controllers/bs.controller';

const router = express.Router();

router.post('/info/:userId', BSController.inputBSInfo);

export = router;