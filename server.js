const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});