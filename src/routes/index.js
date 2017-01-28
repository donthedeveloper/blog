'use strict';
const express = require('express');
const router = express.Router();
// var models = require('../models');
// var Post = models.Post;
// var path = require('path');

router.get('/', (req, res) => {
//   Post.findAll()
//   .then(function(posts) {
//     res.render('index', { posts: posts });
//   })
//   console.log('path:', path);
  res.render('index', {});
});

module.exports = router;