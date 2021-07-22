
const { Comment } = require('../models');

const commentData = [{
        comment_text: "Thats what im sayin' ON GAWD",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "that thang bussin bussin",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "shawty trifling she must be from dirty dock!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;