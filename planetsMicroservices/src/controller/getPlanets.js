const Planet = require("../data");
const { response } = require("../utils/index.js");

module.exports = async (req, res) => {
  const planets = await Planet.list();
  response(res, 200, planets);
};
