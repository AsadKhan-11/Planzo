const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("server start", PORT);
});
