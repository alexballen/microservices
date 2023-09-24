const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" }, //referencia la id del planeta
  films: [{ type: String, ref: "Film" }], //referencia a las peliculas
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

characterSchema.statics.update = async function (id, updatedData) {
  const updatedField = await this.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedField;
};

characterSchema.statics.delete = async function (id) {
  const deleteCharacter = await this.findByIdAndRemove(id);
  return deleteCharacter;
};

module.exports = characterSchema;
