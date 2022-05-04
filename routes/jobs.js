import { Router } from "express";
import * as jobsCtrl from "../controllers/jobs.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

//Public routes
router.get("/", jobsCtrl.index);

//private routes
router.use(decodeUserFromToken);
router.post("/", checkAuth, jobsCtrl.create);
router.get("/:id", checkAuth, jobsCtrl.show);
router.put("/:id", checkAuth, jobsCtrl.edit);
router.delete("/:id", checkAuth, jobsCtrl.delete);

export { router };
