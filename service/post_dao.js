const db = require("./db");

/**
 * 게시글 리스트 조회 함수
 * @param {number} cnt 조회할 게시글 수
 * @return {object} 게시글 리스트 or "fail"
 */
const getRecentList = async (cnt) => {
  const sql = "select * from posts order by updated desc limit ?";
  const results = await db.query(sql, [cnt]);
  if (!results.length) {
    console.log("---------- getRecentList ----------");
    console.log("게시글이 없습니다");
    console.log(`cnt = ${cnt}`);
    return [];
  } // 게시글 없음
  else return results;
};

module.exports = { getRecentList };
