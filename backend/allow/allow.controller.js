const allowModel = require("./allow.model");

class allowController {
  getAllallow(request, respond) {
    allowModel.find().exec()
      .then((allows) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          allows: allows,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  newallow(request, respond) {
    const { userID, lockID } = request.body;

    const allow = new allowModel({
      userID,
      lockID,
    });

    allow.save(function (error) {
      if (error) {
        respond.status(500).send(error);
      } else {
        respond.status(200).send("New allow created!");
      }
    });
  }
}

module.exports = new allowController();
