const Film = require("../data/index.js");
const { response } = require("../utils/index.js");

module.exports = async (req, res) => {
  const newFilm = await Film.create();
  response(res, 201, newFilm);
};
