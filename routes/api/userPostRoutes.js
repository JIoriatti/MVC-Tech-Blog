const router = require('express').Router();
const {Post, Comment, User} = require('../../models');


// api/posts route
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: [
                    'id','username'
                ]
            },
            {
                model: Comment,
                attributes: [
                    'id', 'content', 'creator_id', 'createdAt', 'updatedAt'
                ]
            }]
        })
        res.json(postData);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;