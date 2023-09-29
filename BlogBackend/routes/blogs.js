const express = require('express');
const router = express.Router();

// Import the controller
const { createComment } = require('../controller/commentsController');

router.post('/comments/create', (req, res) => {
    createComment(req, res);
});

// Export the module
module.exports = router;
