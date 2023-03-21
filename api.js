const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const helloAPIRouter = require("./routes/hello");
// const categoryAPIRouter = require("./routes/category");
const datomAPIRouter = require("./routes/datom");
const marketAPIRouter = require("./routes/market");
const contractRouter = require("./routes/contract");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "client/dist")));

app.use("/users", usersRouter);
app.use("/hello", helloAPIRouter);

// 数据市场接口
app.use("/api/v1/markets", marketAPIRouter);

// fake一个 datom 数据
app.use("/api/v1/datom", datomAPIRouter);

app.use("/api/v1/contract", contractRouter);

// Serve the index.html file for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
