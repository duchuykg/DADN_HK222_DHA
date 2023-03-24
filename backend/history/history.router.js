const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./history.controller");

router.get("/", UserController.getAllhistory);
router.post("/", UserController.newhistory);

module.exports = router;