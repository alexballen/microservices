const { Router } = require("express");
const controller = require("../controller/index.js");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getCharacter);
router.post("/", middlewares.characterValidation, controller.createCharacter);

module.exports = router;
