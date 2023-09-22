const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

BlogPost.hasMany(BlogPost, {
  foreignKey: 'parent_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(BlogPost, {
  foreignKey: 'parent_id'
});

module.exports = { User, BlogPost };
