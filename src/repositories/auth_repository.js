import prisma from "../database/prismaClient.js";


async function findEmployee(cpf) {
  return prisma.employee.findUnique({
    where: { cpf }
  });
}

async function registerPassword (cpf, password){
  return prisma.employee.update({
    where: {cpf
  },
  data: {
    password_hash: password}
    
})
}

const authRepository = {
    findEmployee,
    registerPassword
}
export default authRepository;