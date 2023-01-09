const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


User.hasMany(Post,{
    foreignKey: 'creator_name'
});
Post.belongsTo(User,{
    foreignKey: 'creator_name'
});

User.hasMany(Comment,{
    foreignKey: 'creator_name'
});
Comment.belongsTo(User,{
    foreignKey: 'creator_name'
});
