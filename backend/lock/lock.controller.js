const lockModel = require("./lock.model");

class  lockController {
  getAlllock(request, respond) {
    lockModel.find((error, locks) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        locks: locks,
      });
    });
  }

  newlock = function(req, res) {
    const { ten, viTri } = req.body;
    const lock = new lockModel({
      ten,
      viTri
    });
    lock.save(function(error) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send('New lock created!');
      }
    });
  }
}

module.exports = new lockController();
