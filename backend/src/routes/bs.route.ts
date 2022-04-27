import express from 'express';
import BSController from '../controllers/bs.controller';
import mappingController from '../controllers/mapping.controller';
import alarmController from "../controllers/alarm.controller";


const router = express.Router();

router.post('/info/:userId', BSController.inputBSInfo);
router.get('/info/:bsId', BSController.getBSInfo);
router.patch('/info/:bsId', BSController.updateBSInfo);

router.post('/mapping/:bsId', BSController.mappingRequest);
router.get('mapping/:bsId', mappingController.findParentList)

router.post('/alarm/:mappingId',  alarmController.upload.single("img"),alarmController.sendAlarm);
export = router;