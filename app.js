const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const gigsRouter = require("./routes/gigsRoute");

const app = express();
const db = require("./config/db");

const PORT = process.env.PORT || 8080;

// testing the connection
db.authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/gigs", gigsRouter);

app.get("/", (req, res) => {
  res.status(200).send("all items ");
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
