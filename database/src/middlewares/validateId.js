const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (id) {
    if (/^\d+$/.test(id)) {
      next(); // Si contiene solo dígitos, continúa
    } else {
      throw new ClientError("ID no es un número válido¡", 401);
    }
  } else {
    throw new ClientError("Falta el id¡", 401);
  }
};
