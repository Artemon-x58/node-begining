const { HttpError } = require("../../helpers");
const validdateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validdateBody;
