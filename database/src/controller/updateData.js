const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const fieldsToEdit = req.body;
  const updatedFields = await store[model].update(id, fieldsToEdit);
  response(res, 201, updatedFields);
};
