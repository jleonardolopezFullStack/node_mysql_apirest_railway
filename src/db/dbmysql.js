const { createPool } = require("mysql2/promise");
require("dotenv").config();

const pool = createPool({
  host: process.env.DB_HOST || "localhost", // Si estamos en produccion aqui colocamos la IP del computador que nos asignaron
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 3307, // Aqui va el puerto del hardware
  database: process.env.DB_DATABASE || "companydb",
});

module.exports = { pool };
