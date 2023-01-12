const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res)=>{
    
    res.status(404).send(`<h1>Oops!</h1> \n <h3>Something went wrong.</h3>`)
})

module.exports = router;