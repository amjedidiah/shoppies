// Module imports
const express = require('express');
const router = new express.Router();


// API route
router.use('/api', require('./api'));

// Response on all other routes
router.all('*', (req, res) => {
  res.send({
    data: null,
    message: 'Incorrect Route',
    error: true,
  });
});

// Export router module
module.exports = router;
