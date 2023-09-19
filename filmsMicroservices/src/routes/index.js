const { Router } = require("express");
const filmsR = require("./filmsR.js");

const router = Router();

router.use("/films", filmsR);

module.exports = router;
