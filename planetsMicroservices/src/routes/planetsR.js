const { Router } = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getPlanets);
router.get("/:id", middlewares.validateId, controller.getPlanet);

router.post("/", middlewares.validateObject, controller.createPlanet);

router.put("/", middlewares.validateId);
router.put(
  "/:id",
  middlewares.validateId,
  middlewares.validateObject,
  controller.updatePlanet
);

router.delete("/", middlewares.validateId);
router.delete("/:id", middlewares.validateId, controller.deletePlanet);

module.exports = router;
