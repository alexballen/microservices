const characters = require("../data/characters.json");

module.exports = {
  list: async () => {
    return characters;
  },
  create: async () => {
    throw Error("Hay un error en la DB al momento de crear el personaje");
  },
};
