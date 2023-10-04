const { ClientError } = require("../utils/errors");
const Character = require("../data");
const { catchedAsync } = require("../utils");

module.exports = async (req, res, next) => {
  try {
    const newCharacter = req.body;
    const searchById = await Character.getById(newCharacter._id);
    if (!searchById.data) {
      next();
    } else {
      throw new ClientError("Ya existe el ID en la db", 401);
    }
  } catch (error) {
    catchedAsync(next(error));
  }
};
