const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const deleteData = await store[model].delete(id);
  response(res, 201, deleteData);
};
