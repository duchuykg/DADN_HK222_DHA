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

  newallow = async function (request, respond) {
    const { userID, lockID } = request.body;
  
    const allow = new allowModel({
      userID,
      lockID,
    });
  
    try {
      await allow.save();
      respond.status(200).send("New allow created!");
    } catch (error) {
      respond.status(500).send(error);
    }
  };
}

module.exports = new allowController();
