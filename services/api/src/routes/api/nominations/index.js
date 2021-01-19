// Module imports
const express = require('express');
const router = new express.Router();

// Custom module imports
const del = require('./del');
const get = require('./get');
const post = require('./post');

// Routes
router.delete('/', del);
router.get('/', get);
router.post('/', post);

// Export Route
module.exports = router;
