const planets = require("../data/planets.json");

module.exports = {
  list: async () => {
    return planets;
  },
  create: async () => {
    throw Error("Hay un error en la DB al momento de crear el planeta");
  },
};
