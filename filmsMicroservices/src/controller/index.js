const { catchedAsync } = require("../utils/index.js");

module.exports = {
  getFilms: catchedAsync(require("./getFilms.js")),
  createFilm: catchedAsync(require("./createFilm.js")),
};
