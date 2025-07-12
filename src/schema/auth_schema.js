import Joi from "joi";

export const primeiroAcessoFuncionarioSchema = Joi.object({
  cpf: Joi.string().length(11).required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string().valid(Joi.ref("password")).required()
});