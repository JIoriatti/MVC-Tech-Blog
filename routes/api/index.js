const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userPostRoutes = require('./userPostRoutes');

router.use('/comments', commentRoutes);
router.use('/posts', userPostRoutes);


module.exports = router;