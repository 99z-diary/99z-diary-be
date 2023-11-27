const express = require("express");
const router = express.Router();
const dao = require("../service/post_dao");

// 최근 게시글 리스트 조회
router.get("/recent/:cnt", async (req, res) => {
  const results = await dao.getRecentList(Number(req.params.cnt));
  res.send(results);
});

module.exports = router;
