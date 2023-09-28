const { Router } = require("express");
const controller = require("../controller/index.js");
const middlewares = require("../middlewares/index.js");

const router = Router();

router.get("/", controller.getCharacters);
router.get("/:id", middlewares.validateId, controller.getCharacter);

router.post("/", middlewares.validateObject, controller.createCharacter);

router.put("/", middlewares.validateId);
router.put(
  "/:id",
  middlewares.validateId,
  middlewares.validateObject,
  controller.updateCharacter
);

router.delete("/", middlewares.validateId);
router.delete("/:id", middlewares.validateId, controller.deleteCharacter);

module.exports = router;
