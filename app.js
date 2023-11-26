const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const user_router = require("./router/user");
require("dotenv").config();

app.use(cors()); // cors 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user_router);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log("server is running");
});
