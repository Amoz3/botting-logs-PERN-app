const Pool = require('pg').Pool

const pool = new Pool ({
    user: "postgres",
    password: "sqlpassword",
    host: "localhost",
    port: 5432,
    database: "osrs"
});

module.exports = pool