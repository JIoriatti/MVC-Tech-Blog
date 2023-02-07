
const router = require('express').Router();


const {Post, Comment, User} = require('../models');

router.get('/', (req, res)=>{
    res.redirect('/home');
})
// '/' base routes
router.get('/home', async (req, res) => {
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
        res.render('allPosts', {posts,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
          });
    }catch(err){
        res.status(500).json(err);
    }
});

//sepcific post route
router.get('/posts/:id', async (req, res)=>{
    try{
        const postData = await Post.findByPk(req.params.id,{
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
        });
        const post = postData.get({plain:true});
        res.render('post', {post, 
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
          });
    }catch(err){
        res.status(500).json(err);
    }

});

//user route
router.get('/users/:id', async (req,res)=>{
    try{
        const userData = await User.findByPk(req.params.id,{
            attributes:[
                'username'
            ],
            include:[{
                model: Post
            },
            {
                model: Comment
            }]
        });
        const user = userData.get({plain:true});
        const posts = user.posts;
        console.log(posts)
        console.log(user);
        res.render('user', {user});
    }catch(err){
        res.status(500).json(err);
    }

})
//register route
router.get('/register', async (req,res)=>{
    try{
        res.render("register");
    }catch(err){
        console.log(err);
    }
})
// /login
router.get("/login", async (req, res) => {
    // if (req.session.logged_in) {
    //   res.redirect("/home");
    //   return;
    // }
    res.render("login", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  });
  
  // /logout
  router.get("/logout", async (req, res) => {
    const response = await fetch("http://localhost:3001/api/users/logout", {
      method: "POST",
    });
    if (response.ok) {
      res.redirect("/home");
    }
  });

module.exports = router;