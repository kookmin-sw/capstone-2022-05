import express from 'express';
import parentController from '../controllers/parent.controller';
import Authorization from '../middleware/authMiddleware';

const router = express.Router();

router.post('/info/:id', Authorization, parentController.createParentInfo);
router.get('/info/:parentId', Authorization, parentController.getParentInfo);
router.patch('/info/:parentId', Authorization, parentController.editParentInfo);
router.get('/main/:parentId', Authorization, parentController.getMainPage);
router.patch('/mapping/acceptance/:mappingId', Authorization, parentController.acceptMapping);
router.delete('/mapping/rejection/:mappingId', Authorization, parentController.rejectMapping);
router.get('/diary/:mappingId', Authorization, parentController.getDailyDiary);
router.post('/calendar/:mappingId', Authorization, parentController.getCalendarDiary);
router.get('/sensor', Authorization, parentController.getSensorInfo);
router.patch('/sensor', Authorization, parentController.updateSensorInfo);

export = router;
