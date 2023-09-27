const { Router } = require("express");
const controller = require("../controller/index.js");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getCharacters);
router.get("/:id", controller.getCharacter);
router.post("/", middlewares.characterValidation, controller.createCharacter);
router.put("/:id", controller.updateCharacter);
router.delete("/:id", controller.deleteCharacter);

module.exports = router;
