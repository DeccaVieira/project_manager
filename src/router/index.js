import { Router } from "express";
import firstAccessRouter from "./first_access_route.js";
import registerEmployee from "./employee_router.js";
import authRouter from "../router/auth_router.js"

const router = Router();

router.use(firstAccessRouter);
router.use(registerEmployee);
router.use(authRouter);

export default router;
