// Module imports
const express = require('express');
const router = new express.Router();

// Custom module imports
const post = require('./post');
const get = require('./get');

// Routes
router.post('/', post);
router.get('/', get);

// Export Route
module.exports = router;
