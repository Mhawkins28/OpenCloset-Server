const express = require("express");
const app = express();
const normalizePort = require('normalize-port');
const PORT = normalizePort(process.env.PORT || '3001');
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require('body-parser')

//db
require('dotenv').config()
require('./db/connection');

//routes import
const itemRts = require('./routes/itemRoutes');
const lookRts = require('./routes/lookRoutes');
const inspoRts = require('./routes/inspoRoutes');
const authRts= require('./routes/authRoutes');
const userRts= require('./routes/userRoutes')


//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//routes use
app.use('/items', itemRts)
app.use('/looks', lookRts)
app.use('/inspo', inspoRts)
app.use ('/', authRts)
app.use ('/', userRts)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});