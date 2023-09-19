const Character = require("../data/index.js");
const { response } = require("../utils/index.js");

module.exports = async (req, res) => {
  const newCharacter = await Character.create();
  response(res, 201, newCharacter);
};
