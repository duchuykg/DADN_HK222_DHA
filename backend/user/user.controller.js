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

  getUserById = async (req, res) => {
    const userId = req.params.id; 
    try {
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" }); 
      }
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" }); // Nếu xảy ra lỗi, trả về lỗi 500 Internal Server Error
    }
  };
}

module.exports = new userController();
