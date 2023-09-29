const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const modelData = req.body;
  const createData = await store[model].insert(modelData);
  response(res, 201, createData);
};
