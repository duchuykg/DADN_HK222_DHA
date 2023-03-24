const adminModel = require("./admin.model");

class  adminController {
  getAllAdmin(request, respond) {
    adminModel.find((error, admins) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        admins: admins,
      });
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
