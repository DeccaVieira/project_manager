import { Router } from "express";
import firstAccessRouter from "./first_access_route.js";

const router = Router();

router.use(firstAccessRouter);

export default router;
