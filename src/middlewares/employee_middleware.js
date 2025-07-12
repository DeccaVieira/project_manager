export default function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body.data, { abortEarly: false });
    if (error) {
      const messages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: messages });
    }
    next();
  };
}
