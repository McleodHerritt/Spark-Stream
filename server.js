const express = require("express");
const app = express();

const moment = require("moment");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");

app.set("view engin", "js");
app.set("views", __dirname + "/views");

app.use("/", indexRouter);
app.listen(process.env.PORT || 3001);
