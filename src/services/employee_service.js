import employeeRepository from "../repositories/employee_repository.js"

async function registerEmployee(data) {
    try {
    const employeeExists = await employeeRepository.findEmployee(data.cpf)
    if (employeeExists){
throw new Error ("Usuário já cadastrado!")
    }
    const registration_token = data.cpf.slice(0, 6);
  data.registration_token = registration_token;
   
 const newEmployee = await employeeRepository.createEmployee(data)
    return newEmployee

    } catch (error) {
        throw error
    }
}

const employeeService = {
registerEmployee
}

export default employeeService;