const historyModel = require("./history.model");

class historyController {
  async getAllhistory(request, respond) {
    try {
      const historys = await historyModel.find().exec();
      respond.status(200).json({
        success: true,
        message: "Done!",
        historys: historys,
      });
    } catch (error) {
      console.log(error);
    }
  }

  newhistory = function (req, res) {
    const { lockID, userID, adminID, time, open, valid } = req.body;
    const history = new historyModel({
      lockID,
      userID,
      adminID,
      time,
      open,
      valid,
    });
    history.save(function (error) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send("New history created!");
      }
    });
  };
}

module.exports = new historyController();
