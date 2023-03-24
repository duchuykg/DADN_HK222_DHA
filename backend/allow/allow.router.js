const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./allow.controller");

router.get("/", UserController.getAllallow);
router.post("/", UserController.newallow);

module.exports = router;