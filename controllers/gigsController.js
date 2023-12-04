const sequelize = require("sequelize");
const db = require("./../config/db");

exports.getAll = async (req, res) => {
  res.send("All gigs are here");
};
