const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./admin.controller");

router.get("/", UserController.getAllAdmin);
router.post("/", UserController.newadmin);

module.exports = router;