let mysql = require("mysql");

if (process.env.APP_ENV !== "prod") {
  require("dotenv").config();
}
const DB_CONN = process.env.CLEARDB_DATABASE_URL;
let con = mysql.createConnection(DB_CONN);

const QUERIES = {
  getScores: `SELECT * from scores;`,
  saveScore: `INSERT INTO scores SET ?;`,
  getHighscores: `SELECT * from highscores;`,
  saveHighscore: `INSERT INTO highscores SET ?;`,
};
const connect = async function () {
  if (con.state === "disconnected") {
    con.connect();
  }
};

con.on("error", (err) => {
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    con.destroy();
    con = mysql.createConnection(DB_CONN);
    con.connect();
  } else {
    console.error("db error", err);
    throw err;
  }
});

const execQuery = (query = "", params = null) => {
  let parameters = [];
  return new Promise((resolve, reject) => {
    connect().then(() => {
      // console.log("params", params);
      let result = null;
      let sql = QUERIES[query];
      if (query === "saveScore") {
        parameters = {
          ip: params.ip,
          score: params.score,
          data: JSON.stringify(params.data),
        };
      } else if (query === "saveHighscore") {
        parameters = {
          name: params.name,
          ip: params.ip,
          score: params.score,
          data: JSON.stringify(params.data),
        };
      }

      console.log("sql", sql);
      con.query(sql, [parameters], (err, result) => {
        if (err) {
          throw err;
          reject();
        }
        resolve(result);
      });
    });
  });
};

module.exports = {
  execQuery,
};

/*
$.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
}, "jsonp");
*/