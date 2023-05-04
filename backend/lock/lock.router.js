const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./lock.controller");

router.get("/", UserController.getAlllock);
router.get("/:id", UserController.getLockById);
router.post("/", UserController.newlock);
router.put("/:id", UserController.changeLockStatus);
router.put("/:id", UserController.changeLock);
router.delete("/:id", UserController.deleteLock);


module.exports = router;