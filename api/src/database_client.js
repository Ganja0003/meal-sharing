import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST || process.env.MYSQLHOST ,
    port: process.env.DB_PORT || process.env.MYSQLPORT,
    user: process.env.DB_USER || process.env.MYSQLUSER,
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
    database: process.env.DB_DATABASE_NAME || process.env.MYSQLDATABASE,
    ssl:
      process.env.DB_USE_SSL === "true" ? { rejectUnauthorized: false } : false,
  },
});


export default db;

