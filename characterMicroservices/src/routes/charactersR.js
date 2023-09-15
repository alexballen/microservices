const { Router } = require("express");
const controller = require("../controller/index.js");

const router = Router();

router.get("/", controller.getCharacter);

module.exports = router;
