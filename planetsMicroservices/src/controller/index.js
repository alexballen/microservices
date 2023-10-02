const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(require("./getPlanets.js")),
  getPlanet: catchedAsync(require("./getPlanet.js")),
  createPlanet: catchedAsync(require("./createPlanet.js")),
  updatePlanet: catchedAsync(require("./updatePlanet.js")),
  deletePlanet: catchedAsync(require("./deletePlanet.js")),
};
