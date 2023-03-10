const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


User.hasMany(Post,{
    foreignKey: 'creator_id'
});
Post.belongsTo(User,{
    foreignKey: 'creator_id'
});

User.hasMany(Comment,{
    foreignKey: 'creator_id'
});

Comment.belongsTo(User,{
    foreignKey: 'creator_id'
});

Post.hasMany(Comment,{
    foreignKey: 'post_id'
})

Comment.belongsTo(Post,{
    foreignKey: 'post_id'
})



module.exports = {
    User,
    Post,
    Comment
};