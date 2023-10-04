const { ClientError } = require("../utils/errors");
const Planet = require("../data");
const { catchedAsync } = require("../utils");

module.exports = async (req, res, next) => {
  try {
    const newPlanet = req.body;
    const searchById = await Planet.getById(newPlanet._id);
    if (!searchById.data) {
      next();
    } else {
      throw new ClientError("Ya existe el ID en la db", 401);
    }
  } catch (error) {
    catchedAsync(next(error));
  }
};
