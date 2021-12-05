var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var sponsor = require('../model/sponsor.model');
router.post('/add', function (req, res) {
    const obj = req.body;
    sponsor.create(obj).then(docs => {
        res.status(201).send(obj);
    });
})
router.route('/').get(function (req, res) {
    sponsor.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    });
});
module.exports = router;
