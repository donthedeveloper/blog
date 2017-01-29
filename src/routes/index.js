'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const Post = models.Post;
const User = models.User;

router.get('/', (req, res) => {
//   var posts = Post.findAll(function(posts) {
//     return posts;
//   })
//   .catch(function(err) {
//     console.error(err);
//   });
  
  res.render('index', { });
});

// router.get('/:title', (req, res) => {
//   const posts;
//   const title = req.params.title;
  
//   // Post.findOne
  
//   var posts = Post.findOne(function(post) {
//     return post
//   })
//   .catch(function(err) {
//     console.error(err);
//   });
  
//   posts = [posts];
  
//   res.render('index', { posts: posts });
// });

module.exports = router;