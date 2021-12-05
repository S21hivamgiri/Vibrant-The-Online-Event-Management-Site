var express = require('express');
var router = express.Router();

router.use('/', require('../apis/auth.api'));
router.use('/user', require('../apis/user.api'));
router.use('/role', require('../apis/role.api'));
router.use('/feedback', require('../apis/feedback.api'));
router.use('/speaker', require('../apis/speaker.api'));
router.use('/sponsor', require('../apis/sponsor.api'));
router.use('/offer', require('../apis/offer.api'));
router.use('/event', require('../apis/event.api'));


module.exports = router;
