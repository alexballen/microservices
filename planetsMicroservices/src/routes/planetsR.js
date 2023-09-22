const { Router } = require("express");
const controller = require("../controller/index.js");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getPlanets);
router.post("/", middlewares.planetsValidation, controller.createPlanet);

module.exports = router;
