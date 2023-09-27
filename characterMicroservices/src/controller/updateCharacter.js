const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characterFields = req.body;
  const updatedFields = await Character.update(id, characterFields);
  response(res, 201, updatedFields);
};
