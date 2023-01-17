const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res)=>{
    
    res.status(404).send(`<h1>Oops!</h1> \n <h3>Something went wrong.</h3>`)
})

module.exports = router;