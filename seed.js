const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/blog');

// const Promise = require('bluebird');

const models = require('./src/models');
const Post = models.Post;
const User = models.User;

var users = [
  {
    firstname: "Don",
    lastname: "Hansen",
    email: "test@gmail.com",
    contacts: ['developerdontv']
  }
];

var posts = [
  {
    title: "Guest Post",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "First week at Fullstack Academy",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "IDK Post",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

User.sync({ force: true })
.then(function() {
  return Post.sync({ force: true })
})
.then(function() {
  console.log("Dropped old data."); 
  return User.create(users[0]);
})
.then(function() {
  console.log('\n\n SUCCESS \n\n');
})
.catch(function(err) {
  console.error('There was totally a problem', err, err.stack);
});