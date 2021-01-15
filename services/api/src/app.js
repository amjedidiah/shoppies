// Module imports
const express = require('express');
const cors = require('cors');

// Initiate our app
const app = express();
const port = process.env.PORT || 8008;

// Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.listen(port);
