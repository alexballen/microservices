const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planetFields = req.body;
  const updatedFields = await Planet.update(id, planetFields);
  response(res, 201, updatedFields);
};
