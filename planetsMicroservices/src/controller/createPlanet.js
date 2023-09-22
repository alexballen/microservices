const Planet = require("../data/index.js");
const { response } = require("../utils/index.js");

module.exports = async (req, res) => {
  const newPlanet = await Planet.create();
  response(res, 201, newPlanet);
};
