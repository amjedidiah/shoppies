// Module imports
const express = require('express');
const router = new express.Router();

router.use('/nominations', require('./nominations'));

// Export API route
module.exports = router;
