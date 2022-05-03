import { Router } from 'express';
import * as jobsCtrl from "../controllers/job.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router();

//Public routes
router.get('/', jobsCtrl.index);

//private routes
router.get('/', checkAuth, jobsCtrl.show);


export { router }