import { Router } from "express";
import employeeController from "../controllers/employee_controller.js";
import employeeSchema from "../schema/employee_schema.js"
import validateSchema from "../middlewares/employee_middleware.js"
import { authenticateToken } from "../middlewares/authenticateToken.js";
const registerEmployee = Router();

registerEmployee.post("/adicionar-funcionario",authenticateToken,validateSchema(employeeSchema),employeeController.registerEmployeeController)


export default registerEmployee;