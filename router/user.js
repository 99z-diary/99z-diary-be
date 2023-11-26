const express = require("express");
const router = express.Router();
const dao = require("../service/user_dao");

// 로그인
router.post("/login", async (req, res) => {
  const result = await dao.login(req.body.name, req.body.phone);
  res.send(result);
});

module.exports = router;
