const adminModel = require("./admin.model");

class  adminController {
  getAllAdmin = function(request, respond) {
    adminModel.find().exec()
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
  }

  newadmin = function(req, res) {
    const { userID, taiKhoan, matKhau } = req.body;
    const admin = new adminModel({
      userID,
      taiKhoan,
      matKhau
    });
    admin.save(function(error) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send('New admin created!');
      }
    });
  }
}

module.exports = new adminController();
