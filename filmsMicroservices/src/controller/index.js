const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms.js")),
  getFilm: catchedAsync(require("./getFilm.js")),
  createFilm: catchedAsync(require("./createFilm.js")),
  updateFilm: catchedAsync(require("./updateFilm.js")),
  deleteFilm: catchedAsync(require("./deleteFilm.js")),
};
