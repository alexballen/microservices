const { Router } = require("express");
const charactersR = require("./charactersR.js");

const router = Router();

router.use("/characters", charactersR);

module.exports = router;
