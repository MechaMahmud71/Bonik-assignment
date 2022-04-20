const mysql = require("mysql2");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME || 'bonik',
    password: process.env.DB_PASSWORD,
    timezone: "Z",
    dateStrings: true

});


module.exports = pool.promise();

