const { pool } = require("../db/dbmysql.js");

const getIndexController = async (req, res) => {
  const [result] = await pool.query('SELECT "Pong"  AS result');
  console.log("dentro del get");
  res.status(200).json(result);
};

module.exports = { getIndexController };
