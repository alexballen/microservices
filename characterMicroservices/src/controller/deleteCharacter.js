const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deleteCharacter = await Character.delete(id);
  response(res, 201, deleteCharacter);
};
