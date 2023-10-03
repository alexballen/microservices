const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const objectData = req.body;
  if (Object.keys(objectData).length) {
    return next();
  } else {
    throw new ClientError("No hay datos en el objeto¡", 401);
  }
};
