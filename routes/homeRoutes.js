
const router = require('express').Router();


const {Post, Comment, User} = require('../models');



const userName = async (id) =>{
    const name = await User.findOne({
        where :{id: id},
    },)
    return name.dataValues.username;
}
// '/' base routes
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
                ],
                include: [{
                    model: User,
                    attributes: [
                        'id', 'username'
                    ]
                }]
            }]
        })
        const posts = postData.map((post)=>post.get({plain:true}))
        console.log(posts);
        res.render('allPosts', {posts});
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;