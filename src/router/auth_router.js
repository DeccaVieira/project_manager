import authController from "../controllers/auth_controlller.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", authController.auth_controller);
authRouter.post("/newpassword", authController.registerPasswordController)
authRouter.post("/change-password",authController.changePasswordController)
authRouter.post("/signin",authController.loginController)
export default authRouter;