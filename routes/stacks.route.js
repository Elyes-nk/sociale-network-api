const router = require("express").Router();
const verify = require("../jsonwebtoken/verifyToken");
const stacksController = require("../controllers/stacksController")

//CREATE STACK
router.post("/", verify, stacksController.create);

//UPDATE
router.put("/:id", verify, stacksController.update);

//DELETE
router.delete("/:id", verify, stacksController.delete);

//GET
router.get("/find/:id", verify, stacksController.get);

//GET ALL
router.get("/", stacksController.getAll);


module.exports = router;
