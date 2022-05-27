import express from 'express';
import parentController from '../controllers/parent.controller';
import Authorization from '../middleware/authMiddleware';

const router = express.Router();

router.post('/info/:id', parentController.createParentInfo);
router.get('/info/:parentId', parentController.getParentInfo);
router.patch('/info/:parentId', parentController.editParentInfo);
router.get('/main/:parentId', parentController.getMainPage);
router.patch('/mapping/acceptance/:mappingId', parentController.acceptMapping);
router.delete('/mapping/rejection/:mappingId', parentController.rejectMapping);
router.get('/diary/:mappingId', parentController.getDailyDiary);
router.post('/calendar/:mappingId', parentController.getCalendarDiary);
router.get('/sensor', parentController.getSensorInfo);
router.patch('/sensor', parentController.updateSensorInfo);
router.patch('/sensor/alert', parentController.updateSensorAlert);

export = router;
