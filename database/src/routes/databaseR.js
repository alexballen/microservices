const { Router } = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", middlewares.validateModel);
router.get("/:model", middlewares.validateModel, controller.getData);
router.get("/:model/:id", middlewares.validateId, controller.getDataById);

router.post("/", middlewares.validateModel);
router.post(
  "/:model",
  middlewares.validateModel,
  middlewares.validateObject,
  controller.createData
);

router.put("/", middlewares.validateModel);
router.put("/:model", middlewares.validateModel, middlewares.validateId);
router.put(
  "/:model/:id",
  middlewares.validateModel,
  middlewares.validateId,
  middlewares.validateObject,
  controller.updateData
);

router.delete("/", middlewares.validateModel);
router.delete("/:model", middlewares.validateModel, middlewares.validateId);
router.delete(
  "/:model/:id",
  middlewares.validateModel,
  middlewares.validateId,
  controller.deleteData
);

module.exports = router;
