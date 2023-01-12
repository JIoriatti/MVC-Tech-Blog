const router = require('express').Router();
const {Post, Comment, User} = require('../../models');


// api/posts route
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{
                model: User
            },
            {
                model: Comment
            }]
        })
        res.json(postData);
    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;