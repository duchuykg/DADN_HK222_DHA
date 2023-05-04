const adminModel = require("./admin.model");

class adminController {
  getAllAdmin = function (request, respond) {
    adminModel
      .find()
      .exec()
      .then((admins) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          admins: admins,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  newadmin = async function (req, res) {
    const { userID, taiKhoan, matKhau } = req.body;
    const admin = new adminModel({
      userID,
      taiKhoan,
      matKhau,
    });
    try {
      await admin.save();
      res.status(200).send("New admin created!");
    } catch (error) {
      res.status(500).send(error);
    }
  };

}

module.exports = new adminController();
