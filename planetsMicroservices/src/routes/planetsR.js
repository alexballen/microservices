const { Router } = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getPlanets);
router.get(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.getPlanet
);

router.post(
  "/",
  middlewares.findDuplicateId,
  middlewares.validateObject,
  controller.createPlanet
);

router.put("/", middlewares.validateId);
router.put(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  middlewares.validateObject,
  controller.updatePlanet
);

router.delete("/", middlewares.validateId);
router.delete(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.deletePlanet
);

module.exports = router;
