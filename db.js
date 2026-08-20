
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "issue_tracker",
  port: Number(process.env.DB_PORT || 5433),
  password: process.env.DB_PASSWORD || "postgres",
});

module.exports = pool;