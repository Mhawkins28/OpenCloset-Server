const express = require("express");
const app = express();
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '3000');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
let path = require("path");

//db
require('dotenv').config()
require('./db/connection');

//routes import

//middleware

//routes use

app.get("/", (req, res) => {
    res.json("Project 4 is up. letssss gooooo");
  });

app.listen(PORT, () => {
    console.log("Hello from port", PORT);
  });