const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userPostRoutes = require('./userPostRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/posts', userPostRoutes);
router.use('/users', userRoutes)

module.exports = router;