const express = require('express')
const usersRouter = require('./users.js');
const sessionRouter = require('./session');
const mediaRouter = require('./media');
const shelfRouter = require('./shelf');
const reviewRouter = require('./reviews');
const searchRouter = require('./search');

const router = express.Router();

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/media', mediaRouter);
router.use('/shelves', shelfRouter);
router.use('/reviews', reviewRouter);
router.use('/search', searchRouter);

// // POST test route
// router.post('/test', function (req, res) {
//    res.json({ requestBody: req.body });
// });


module.exports = router;
