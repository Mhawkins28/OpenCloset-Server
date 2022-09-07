const express = require("express");
const app = express();
const normalizePort = require('normalize-port')
const PORT = normalizePort(process.env.PORT || '3001');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const cookieSession = require("cookie-session");
let path = require("path");

//db
require('dotenv').config()
require('./db/connection');

//routes import

const closetRts = require('./routes/closetRoutes');
const lookbookRts = require('./routes/lookbookRoutes');
const inspoRts = require('./routes/inspoRoutes');
const userRts = require('./routes/userRoutes');
const authRts= require('./routes/authRoutes');


//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(
  session({
    secret: "MCLOS1!",
    resave: false,
    saveUninitialized: true,
  })
);

//routes use

app.use('/closet', closetRts)
app.use('/lookbook', lookbookRts)
app.use('/inspo', inspoRts)
app.use('/user', userRts)
app.use ('/', authRts)

app.get("/", (req, res) => {
    res.json("Project 4 is up. letssss gooooo");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});