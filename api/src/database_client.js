import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.MYSQLHOST ,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    ssl: { rejectUnauthorized: false },
  },
});


export default db;

