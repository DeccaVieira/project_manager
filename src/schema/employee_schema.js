import Joi from "joi";


const phoneSchema = Joi.object({
  ddd: Joi.number().integer().min(10).max(99).required(),
  phoneNumber: Joi.number().integer().required()
});


const cnhSchema = Joi.object({
  number_license: Joi.string().required(),
  validity: Joi.date().iso().required(),
  first_drivers_license: Joi.date().iso().required()
});


const addressSchema = Joi.object({
  zip_code: Joi.string().required(),
  street_name: Joi.string().required(),
  number_of_house: Joi.number().integer().required(),
  city: Joi.string().required(),
  state: Joi.string().length(2).required(),
  country: Joi.string().required()
});


const employeeSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  date_of_birth: Joi.date().iso().required(),
  rg: Joi.string().required(),
  cpf: Joi.string().length(11).required(),
  drivers_license: Joi.boolean().required(),
  occupation_id: Joi.number().integer().required(),
  admission_date: Joi.date().iso().required(),
  phones: Joi.array().items(phoneSchema).min(1).required(),
  cnhs: Joi.array().items(cnhSchema).optional(),
  address: addressSchema.required()
});

export default employeeSchema;

