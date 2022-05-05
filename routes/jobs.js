import { Router } from "express";
import * as jobsCtrl from "../controllers/jobs.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

//Public routes
router.get('/', jobsCtrl.index);
router.post("/", jobsCtrl.create);

//private routes
router.use(decodeUserFromToken)
router.patch("/", checkAuth, jobsCtrl.saveJob);
router.get("/:id", checkAuth, jobsCtrl.show);
router.put("/:id", checkAuth, jobsCtrl.edit);
router.delete("/:id", checkAuth, jobsCtrl.delete);


export { router }
