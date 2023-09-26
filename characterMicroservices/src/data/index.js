const characters = require("../data/characters.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const result = await axios.get("http://localhost:8004/Character");
    console.log(result);
    return result;
  },
  create: async () => {
    throw Error("Hay un error en la DB al momento de crear el personaje");
  },
};
