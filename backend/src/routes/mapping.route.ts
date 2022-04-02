import express from 'express';
import mappingController from "../controllers/mapping.controller"

const router = express.Router();

router.get('/babysitter/:bsId', mappingController.findParentList);

export = router;