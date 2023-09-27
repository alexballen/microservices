const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters.js")),
  getCharacter: catchedAsync(require("./getCharacter.js")),
  createCharacter: catchedAsync(require("./createCharacter.js")),
  updateCharacter: catchedAsync(require("./updateCharacter.js")),
  deleteCharacter: catchedAsync(require("./deleteCharacter.js")),
};
