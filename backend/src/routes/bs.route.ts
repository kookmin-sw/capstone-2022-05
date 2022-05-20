import express from 'express';
import BSController from '../controllers/bs.controller';
import mappingController from '../controllers/mapping.controller';
import alarmController from "../controllers/alarm.controller";
import workdiaryController from "../controllers/workdiary.controller"
import Authorization from '../middleware/authMiddleware';


const router = express.Router();

router.post('/info/:userId', Authorization, BSController.inputBSInfo);
router.get('/info/:bsId', Authorization, BSController.getBSInfo);
router.patch('/info/:bsId', Authorization, BSController.updateBSInfo);

router.post('/mapping/:bsId', Authorization, BSController.mappingRequest);
router.get('/mapping/:bsId', Authorization, mappingController.findParentList)

router.post('/alarm/:mappingId', Authorization, alarmController.upload.single("img"), alarmController.sendAlarm);

router.post('/diary/:mappingId', Authorization, workdiaryController.writeWorkdiary) //,workdiaryController.upload.array("img")

router.get('/test',(req,res) => res.send("test1"))
export = router;