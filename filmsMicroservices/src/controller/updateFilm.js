const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const filmFields = req.body;
  const updatedFields = await Film.update(id, filmFields);
  response(res, 201, updatedFields);
};
