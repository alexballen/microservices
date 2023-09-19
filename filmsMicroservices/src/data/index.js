const films = require("../data/films.json");

module.exports = {
  list: async () => {
    return films;
  },
  create: async () => {
    throw Error("Hay un error en la DB al momento de crear la pelicula");
  },
};
