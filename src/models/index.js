var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/blog');
var marked = require('marked');

var Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeValidate: function(post) {
      if (post.title) {
        page.urlTitle = page.title.replace(/\s+/g, '-').replace(/\W/g, '');
      }
    }
  },
  getterMethods: {
    renderedContent: function() {
      return marked(this.content);
    }
  }
});

module.exports = {
  Post: Post
}