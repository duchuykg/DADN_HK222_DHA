const userModel = require("./user.model");

class userController {
  getAllUser(request, respond) {
    userModel.find((error, users) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        users: users,
      });
    });
  }

  newuser = function (req, res) {
    const { ten, thongTin, anhDaiDien } = req.body;
    const user = new userModel({
      ten,
      thongTin,
      anhDaiDien,
    });
    user.save(function (error) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send("New user created!");
      }
    });
  };
}

module.exports = new userController();
