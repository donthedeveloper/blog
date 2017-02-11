const Sequelize = require('sequelize');

// const Promise = require('bluebird');

const models = require('./src/models');
const Post = models.Post;
const User = models.User;
const db = models.db;

const chalk = require('chalk');

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


db.sync({ force: true })
.then(function() {
  console.log(chalk.blue("Dropped old data."));
  return User.create(users[0]);
})
.then(function(users) {
  console.log(chalk.green("Successfully seeded users table."));
  return Post.bulkCreate(posts, {individualHooks: true});
})
.then(function(posts) {
  posts.forEach(function(post) {
    console.log(chalk.blue(post.getDataValue('urlTitle')));
  });
  console.log(chalk.green("Successfully seeded posts table"));
})
.catch(function(err) {
  console.error('There was totally a problem', err, err.stack);
});