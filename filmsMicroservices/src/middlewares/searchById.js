const { ClientError } = require("../utils/errors");
const Film = require("../data");
const { catchedAsync } = require("../utils");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const searchById = await Film.getById(id);
    if (!searchById.data) {
      throw new ClientError("No existe el ID en la db", 401);
    } else {
      next();
    }
  } catch (error) {
    catchedAsync(next(error));
  }
};
