const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (!model) {
    throw new ClientError("Falta el nombre del modelo¡", 401);
  }
  if (["Character", "Film", "Planet"].includes(model)) {
    return next();
  } else {
    throw new ClientError("Invalid Model", 401);
  }
};
