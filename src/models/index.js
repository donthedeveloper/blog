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
    defaultValue: null
  },
  intro: {
    type: Sequelize.TEXT
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeBulkCreate: function(posts, options) {
      console.log('asdfkljasfdlkasjdflaskdf\n\n\n\n\n');
      posts.forEach(function(post) {
        post.urlTitle = post.title.replace(/\s+/g, '-');
      });
      console.log('hey');
    }
  },
  getterMethods: {
    renderedContent: function() {
      return marked(this.content);
    }
  }
});

var User = db.define('user', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
    isEmail: true
  },
  contacts: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  }
});

Post.belongsTo(User, {
  as: 'author'
});

module.exports = {
  Post: Post,
  User: User,
  db: db
}