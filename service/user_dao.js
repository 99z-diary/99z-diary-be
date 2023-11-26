const db = require("./db");

/**
 * 로그인 함수
 * @param {string} name 유저 이메일
 * @param {string} phone 유저 핸드폰번호
 * @return {object} 유저 정보 or "fail"
 */
const login = async (name, phone) => {
  const sql = "select uid from users where name = ? and phone = ?";
  const results = await db.query(sql, [name, phone]);
  if (!results.length) {
    console.log("---------- login ----------");
    console.log("없는 계정입니다");
    console.log(`name = ${name}, phone = ${phone}`);
    return [];
  } // 없는 계정
  else return results[0];
};

module.exports = { login };
