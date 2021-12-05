var express = require('express');
var router = express.Router();
var speaker = require('../model/speaker.model');

router.post('/add', function (req, res) {
    const obj = req.body;
    speaker.create(obj).then(docs => {
        res.status(201).send(obj);
    });
});

router.route('/').get(function (req, res) {
    speaker.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});
module.exports = router;
