const { Router } = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getFilms);
router.get(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.getFilm
);

router.post(
  "/",
  middlewares.findDuplicateId,
  middlewares.validateObject,
  controller.createFilm
);

router.put("/", middlewares.validateId);
router.put(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  middlewares.validateObject,
  controller.updateFilm
);

router.delete("/", middlewares.validateId);
router.delete(
  "/:id",
  middlewares.validateId,
  middlewares.searchById,
  controller.deleteFilm
);

module.exports = router;
