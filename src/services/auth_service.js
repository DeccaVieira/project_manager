import bcrypt from "bcrypt";
import authRepository from "../repositories/auth_repository.js"
import jwt from "jsonwebtoken";

async function auth_service(cpf) {
  try {
   const isFirstAccess = await authRepository.findEmployee(cpf);
  return isFirstAccess;
   
  } catch (error) {
  throw new Error(error);
    
  }
}

async function registerPasswordService(cpf, password) {
  const pass = password;
  const saltRounds = 10; 
  const hash = await bcrypt.hash(pass, saltRounds);
   try {
  await authRepository.registerPassword(cpf,hash)
  return 
  } catch (error) {
    throw new Error(error).message;
    
  }
}
async function changePassword(cpf, old_password, newPassword) {
  try {
    const verify_password = await authRepository.findEmployee(cpf);

    const isMatch = await bcrypt.compare(
      old_password,
      verify_password.password_hash
    );

    if (!isMatch) {
      throw new Error("Senha atual incorreta.");
    }

    const newHash = await bcrypt.hash(String(newPassword), 10);
    await authRepository.registerPassword(cpf, newHash);
  } catch (error) {
    throw new Error(error.message);
  }
}
const JWT_SECRET = process.env.JWT_SECRET || "chave-muitooooo-secreta"; // defina no seu .env


async function loginService(cpf, password) {
  try {
    const user = await authRepository.findEmployee(cpf); // ADICIONAR await

    if (!user || !user.password_hash) {
      throw new Error("Login ou senha incorreta."); // proteção extra
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      throw new Error("Login ou senha incorreta.");
    }
    const token = jwt.sign(
      {
        id: user.id,
        cpf: user.cpf,
        nome: user.nome,
        cargo: user.cargo,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return token;

  } catch (error) {
    throw new Error(error.message, "err");
  }
}

const authService = {
  auth_service,
  registerPasswordService,
  changePassword,
  loginService
}

export default authService;