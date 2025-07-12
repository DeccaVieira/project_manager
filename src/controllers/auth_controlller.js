import authService from "../services/auth_service.js";

async function auth_controller(req,res) {
    const {cpf} = req.body
    try {
   const auth = await authService.auth_service(cpf);
      if (auth.password_hash === null) {
      res.status(200).json({message:"Cadastrar Senha"})
        
      } else {
        res.status(200).json({message:"Solicitar Senha"})
      } 
    } catch (error) {
        return res.status(error.status || 404).json({message: "Cpf não cadastrado"})
    }
}

async function registerPasswordController(req,res) {
    const {cpf, password} = req.body;
    try {
        authService.registerPasswordService(cpf, password)
    res.status(201).json({message:"Senha Cadastrada com Sucesso"})
    } catch (error) {
        return res.status(error.status || 404).json({message: "Cpf não cadastrado"})
    }
}

async function changePasswordController(req,res) {
    const {cpf, oldPassword, newPassword} = req.body;
    try {
       await authService.changePassword(cpf, oldPassword, newPassword);
        res.status(200).json({message:"Senha alterada com sucesso"})
    } catch (error) {
        return res.status(error.status || 401).json({message: "Senha não confere"})
    }
}

export async function loginController(req, res) {
  const { cpf, password } = req.body;

  try {
    const token = await authService.loginService(cpf, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}







const authController = {
    auth_controller,
    registerPasswordController,
    changePasswordController,
    loginController
}

export default authController;