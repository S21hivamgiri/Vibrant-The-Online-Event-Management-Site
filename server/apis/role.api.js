var express = require('express');
var router = express.Router();
var role = require('../model/role.model');

router.post('/', function (req, res) {
    const obj = req.body;
    role.create(obj).then(docs => {
        res.status(201).send(obj);
    });
});

router.route('/').get(function (req, res) {
    role.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

module.exports = router;
