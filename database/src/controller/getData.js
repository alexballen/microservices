const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const getAllData = await store[model].list();
  response(res, 201, getAllData);
};
