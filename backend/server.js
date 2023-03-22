const express = require("express"); // handle api
const dotenv = require("dotenv").config(); // handle api
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
// const mongoose = require('mongoose'); //handle database

const app = express(); // creating an express application

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use( errorHandler );

app.listen(port, () => console.log(`server started on port ${port}`));