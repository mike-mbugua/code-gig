const express = require("express");
const gigsController = require("./../controllers/gigsController");

const router = express.Router();

router.route("/").get(gigsController.getAll);

module.exports = router;
