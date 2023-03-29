const userModel = require("./user.model");
const allowModel = require("../allow/allow.model");
const lockModel = require("../lock/lock.model");

class userController {
  getAllUser(request, respond) {
    userModel.find().exec()
      .then((users) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          users: users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  newuser = async function (req, res) {
    const { ten, thongTin, anhDaiDien } = req.body;
    const user = new userModel({
      ten,
      thongTin,
      anhDaiDien,
    });
    try {
      await user.save();
      res.status(200).send("New user created!");
    } catch (error) {
      res.status(500).send(error);
    }
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
      res.status(500).json({ message: "Server error" });
    }
  };

  getUserLocks = async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await allowModel.find({ userID: userId });
      if (!result) {
        return res.status(404).json({ message: "Lock not found" });
      }
      const userLocks = [];

      for (const allow of result) {
        const lockResult = await lockModel.findById(allow.lockID);
        userLocks.push(lockResult);
      }
      res.status(200).json(userLocks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
}

module.exports = new userController();
