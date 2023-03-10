const { Comment } = require('../models');

const commentData = [
    {
        content: "This is a very useful tip. Thank you for posting!",
        creator_id: 3,
        post_id: 1,
    },
    {
        content: "Very interesting, this was very insightful.",
        creator_id: 1,
        post_id: 2
    },
    {
        content: "I'm so lost right now.",
        creator_id: 2,
        post_id: 2
    }
];

const seedComments = () =>  Comment.bulkCreate(commentData);

module.exports = seedComments;