const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const deleteFilm = await Film.delete(id);
  response(res, 201, deleteFilm);
};
