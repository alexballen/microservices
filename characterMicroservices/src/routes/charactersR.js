const { Router } = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getCharacters);
router.get(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.getCharacter
);

router.post(
  "/",
  middlewares.findDuplicateId,
  middlewares.validateObject,
  controller.createCharacter
);

router.put("/", middlewares.validateId);
router.put(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  middlewares.validateObject,
  controller.updateCharacter
);

router.delete("/", middlewares.validateId);
router.delete(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.deleteCharacter
);

module.exports = router;
