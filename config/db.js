const sequelize = require("sequelize");
module.exports = new sequelize("code gig", "michael", "peakyblinders", {
  host: "127.0.0.1",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
