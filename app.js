const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();

app.use(cors()); // cors 미들웨어

server.listen(process.env.SERVER_PORT, () => {
  console.log("server is running");
});
