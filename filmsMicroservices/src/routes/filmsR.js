const { Router } = require("express");
const controller = require("../controller/index.js");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getFilms);
router.post("/", middlewares.filmsValidation, controller.createFilm);

module.exports = router;
