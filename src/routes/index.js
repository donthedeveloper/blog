'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const Post = models.Post;
const User = models.User;

router.get('/', (req, res) => { 
  res.render('index', { });
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
  });
  
});

module.exports = router;