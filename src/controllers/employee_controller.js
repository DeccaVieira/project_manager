import employeeService from "../services/employee_service.js";

async function registerEmployeeController(req, res) {
    const data = req.body
    try {
        await employeeService.registerEmployee(data)
        res.status(201).json({message:"Cadastro criado com sucesso!"})
    } catch (error) {
        return res.status(error.status || 400).json({message: error.message})
    }
    
}

const employeeController = {
    registerEmployeeController
}

export default employeeController;