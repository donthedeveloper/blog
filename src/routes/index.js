'use strict';
const express = require('express');
const router = express.Router();

const models = require('../models');
const Post = models.Post;
const User = models.User;

const chalk = require('chalk');

router.get('/', (req, res) => {
  
  Post.findAll()
  .then(function(posts) {
    console.log(chalk.green('Successfully retrieved posts from database.'));
    res.render('index', { posts: posts });
  })
  .catch(function(err) {
    console.error(err);
    res.send();
  });
  
});

router.get('/:title', (req, res) => {
  const title = req.params.title;
  
  Post.findOne({
    where: {
      urlTitle: title
    }
  })
  .then(function(post) {
    console.log(post);
    res.send(post);
  })
  .catch(function(err) {
    console.error(err);
    res.send();
  });
  
});

module.exports = router;