const express = require('express'); // handle api
const mongoose = require('mongoose'); //handle database 
const cors = require('cors'); //allow us to 

const app = express(); // creating an express application

app.use(express.json());// allow us to use content type of json in our api
app.use(cors()); //prevent any cors-origin errors


const mongoose = require('mongoose');

