import express from 'express';
import parentController from '../controllers/parent.controller';
import Authorization from '../middleware/authMiddleware';

const router = express.Router();

router.post('/info/:id', Authorization, parentController.createParentInfo);
router.get('/info/:parentId', Authorization, parentController.getParentInfo);
router.patch('/info/:parentId', Authorization, parentController.editParentInfo);
router.get('/main/:parentId', parentController.getMainPage);
router.patch('/mapping/acceptance/:mappingId', parentController.acceptMapping);
router.delete('/mapping/rejection/:mappingId', parentController.rejectMapping);

export = router;
