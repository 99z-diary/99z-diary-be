const db = require("./db");

/**
 * 가까운 스케줄 리스트 조회 함수
 * @param {number} cnt 조회할 스케줄 수
 * @return {object} 스케줄 리스트 or "fail"
 */
const getRecentList = async (cnt) => {
  const sql = "select * from schedules order by meet_time desc limit ?";
  const results = await db.query(sql, [cnt]);
  if (!results.length) {
    console.log("---------- getRecentList ----------");
    console.log("스케줄이 없습니다");
    console.log(`cnt = ${cnt}`);
    return [];
  } // 스케줄 없음
  else return results;
};

module.exports = { getRecentList };
