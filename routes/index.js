'use strict';
const express = require('express');
const router = express.Router();

router.get('/:title', function(req, res) {
  res.render('index', {});
});

module.exports = router;