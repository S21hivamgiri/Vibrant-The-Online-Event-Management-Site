var express = require('express');
var router = express.Router();
var httpStatus = require('http-status-codes');
var offer = require('../model/offer.model');

router.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    offer.findByIdAndDelete(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.post('/add', function (req, res) {
    const obj = req.body;
    offer.create(obj).then(docs => {
        res.status(201).send(obj);
    });
});

router.route('/').get(function (req, res) {
    offer.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/redeem/:name').get(function (req, res) {
    let name = req.params.name;
    offer.findOne({ code: name }).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

module.exports = router;
