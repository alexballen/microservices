const { catchedAsync } = require("../utils/index.js");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets.js")),
  createPlanet: catchedAsync(require("./createPlanet.js")),
};
