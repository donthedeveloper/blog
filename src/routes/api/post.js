const express = require('express');
const router = express.Router();

const modules = require('../../models');
const db = modules.db;
const Post = modules.Post;

const chalk = require('chalk');

router.get('/posts', function(req, res) {
  Post.findAll()
  .then(function(posts) {
    console.log( chalk('Requested and successfully retrieved posts.') );
    res.json(posts);
  })
  .catch(function(err) {
    console.error(err);
  });
});

module.exports = router;