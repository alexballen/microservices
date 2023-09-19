const { catchedAsync } = require("../utils");

module.exports = {
  getCharacter: catchedAsync(require("./getCharacter.js")),
  createCharacter: catchedAsync(require("./createCharacter.js")),
};
