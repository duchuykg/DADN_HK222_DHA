const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require('./user/user.router')
const adminRouter = require('./admin/admin.router')
const lockRouter = require('./lock/lock.router')
const allowRouter = require('./allow/allow.router')
const historyRouter = require('./history/history.router')
const http = require("http").createServer(app);
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();

const mongoDB_url =
  "mongodb+srv://mauduckg:mauduckg@cluster0.liowy3n.mongodb.net/test";
mongoose
  .connect(mongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err)); 

http.listen(4000, function () {
  console.log("listening on port 4000");
});

app.use(cors());
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/lock', lockRouter);
app.use('/allow', allowRouter);
app.use('/history', historyRouter);
