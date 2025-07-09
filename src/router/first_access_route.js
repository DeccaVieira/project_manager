import firstAccessController from "../controllers/first_access_controller.js";
import { Router } from "express";

const firstAccessRouter = Router();

firstAccessRouter.post("/primeiro-acesso", firstAccessController.processFirstAccess);

export default firstAccessRouter;