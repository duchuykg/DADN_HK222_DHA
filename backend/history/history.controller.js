const historyModel = require("./history.model");

class historyController {
  async getAllhistory(request, respond) {
    await historyModel.find((error, historys) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        historys: historys,
      });
    });
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
