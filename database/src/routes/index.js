const { Router } = require("express");
const databaseR = require("./databaseR");

const router = Router();

router.use("/", databaseR);

module.exports = router;
