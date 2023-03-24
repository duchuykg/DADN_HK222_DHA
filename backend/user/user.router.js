const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./user.controller");

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.newuser);

module.exports = router;