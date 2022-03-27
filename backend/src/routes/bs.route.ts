import express from 'express';
import BSController from '../controllers/bs.controller';

const router = express.Router();

router.post('/info/:userId', BSController.inputBSInfo);
router.get('/info/:bsId', BSController.getBSInfo);
router.patch('/info/:bsId', BSController.updateBSInfo);

export = router;