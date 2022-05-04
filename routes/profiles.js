import { Router } from "express";
import * as profilesCtrl from "../controllers/profiles.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
//post route for user to safe to profile
router.use(decodeUserFromToken);
router.get("/", checkAuth, profilesCtrl.index);

export { router };
