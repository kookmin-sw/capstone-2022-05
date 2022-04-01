import express from 'express';
import parentController from '../controllers/parent.controller';
import Authorization from '../middleware/authMiddleware';

const router = express.Router();

router.post('/info/:id', Authorization, parentController.createParentInfo);
router.get('/info/:parentId', Authorization, parentController.getParentInfo);
router.patch('/info/:parentId', Authorization, parentController.editParentInfo);

export = router;
