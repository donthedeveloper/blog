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
  intro: {
    type: Sequelize.TEXT
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeValidate: function(post) {
      if (post.title) {
        post.urlTitle = post.title.replace(/\s+/g, '-').replace(/\W/g, '');
      }
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
    unique: true,
    isEmail: true
  },
  contacts: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  }
});

var Fire = db.define('fire', {
  fireAtLeftDoor: {
    type: Sequelize.BOOLEAN
  },
  fireAtRightDoor: {
    type: Sequelize.BOOLEAN
  }
});

Post.belongsTo(User, {
  as: 'author'
});

module.exports = {
  Post: Post,
  User: User,
  Fire: Fire
}