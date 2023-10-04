const { ClientError } = require("../utils/errors");
const Film = require("../data");
const { catchedAsync } = require("../utils");

module.exports = async (req, res, next) => {
  try {
    const newFilm = req.body;
    const searchById = await Film.getById(newFilm._id);
    if (!searchById.data) {
      next();
    } else {
      throw new ClientError("Ya existe el ID en la db", 401);
    }
  } catch (error) {
    catchedAsync(next(error));
  }
};
