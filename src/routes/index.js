'use strict';
const express = require('express');
const router = express.Router();

router.get('/:title?', (req, res) => {
//   var title = res.param.title;
  res.render('index', {});
});

module.exports = router;