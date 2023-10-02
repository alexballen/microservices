const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deletePlanet = await Planet.delete(id);
  response(res, 201, deletePlanet);
};
