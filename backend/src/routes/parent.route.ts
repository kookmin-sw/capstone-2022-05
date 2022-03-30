import express from 'express';
import parentController from '../controllers/parent.controller';

const router = express.Router();

router.post('/info/:id', parentController.createParentInfo);
router.get('/info/:parentId', parentController.getParentInfo);
router.patch('/info/:parentId', parentController.editParentInfo);

export = router;