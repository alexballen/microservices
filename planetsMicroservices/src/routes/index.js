const { Router } = require("express");
const planetsR = require("./planetsR.js");

const router = Router();

router.use("/planets", planetsR);

module.exports = router;
