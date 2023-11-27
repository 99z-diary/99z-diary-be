const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const user_router = require("./router/user");
const post_router = require("./router/post");
const schedule_router = require("./router/schedule");
require("dotenv").config();

app.use(cors()); // cors 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user_router);
app.use("/posts", post_router);
app.use("/schedules", schedule_router);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log("server is running");
});
