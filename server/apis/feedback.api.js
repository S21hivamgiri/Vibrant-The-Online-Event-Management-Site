var express = require('express');
var router = express.Router();
var feedback = require('../model/feedback.model');

router.post('/add', function (req, res) {
    const obj = req.body;
    feedback.create(obj).then(docs => {
        res.status(201).send(obj);
    });
});

router.route('/').get(function (req, res) {
    feedback.aggregate([
        { $group: { _id: null, avg: { $avg: "$rating" } } }
    ]).then(docs => {
        res.status(201).send(docs[0]);
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = router;
