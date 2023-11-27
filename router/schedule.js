const express = require("express");
const router = express.Router();
const dao = require("../service/schedule_dao");

// 가까운 스케줄 리스트 조회
router.get("/recent/:cnt", async (req, res) => {
  const results = await dao.getRecentList(Number(req.params.cnt));
  res.send(results);
});

module.exports = router;
