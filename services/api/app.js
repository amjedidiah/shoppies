// Module imports
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require('express');
const formData = require('express-form-data');
const mongoose = require('mongoose');

// Environment variables
require('dotenv').config();

// Route imports
const routes = require('./src/routes');

// DB_URL
const {DB_URL} = process.env;

// Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Initiate app
const app = express();
const port = process.env.PORT || 8008;

// Configure app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(formData.parse());

if (!isProduction) app.use(errorHandler());

// DB connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('debug', true);

// Routes
app.use(routes);

app.listen(port);
