import prisma from "../database/prismaClient.js";

async function findEmployee(cpf) {
  return prisma.employee.findUnique({
    where: { cpf }
  });
}
async function createEmployee(employeeData) {
  return prisma.employee.create({
    data: {
      name: employeeData.name,
      date_of_birth: employeeData.date_of_birth,
      rg: employeeData.rg,
      cpf: employeeData.cpf,
      drivers_license: employeeData.drivers_license,
      occupation_id: employeeData.occupation_id,
      admission_date: employeeData.admission_date,
      
      password_hash: null,
      phones: {
        create: employeeData.phones, 
      },
      cnhs: {
        create: employeeData.cnhs,
      },
      address: {
        create: employeeData.address, 
      },
    },
  });
}

const employeeRepository = {
  createEmployee, findEmployee
};

export default employeeRepository;
