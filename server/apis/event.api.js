var express = require('express');
var httpStatus = require('http-status-codes');
var router = express.Router();
const event = require('../model/event.model');

router.route('/').get((req, res) => {
    event.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/chart').get((req, res) => {
    event.aggregate([{ $group: { _id: "$country", label: { $first: '$country' }, y: { $sum: 1 } } }]).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/add').post((req, res) => {
    const obj = req.body;
    event.create(obj).then(docs => {
        res.status(httpStatus.CREATED).send(obj);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        console.log(err);
    });
});
router.route('/track').get((req, res) => {
    event.find({}, { title: 1, start: 1, end: 1, _id: 1 }).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/:id').get((req, res) => {
    let id = req.params.id;
    event.findById(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.put('/edit/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    console.log(obj)
    event.findByIdAndUpdate(id, { name: obj.name, email: obj.email, country: obj.country, code: obj.code, event: obj.event, address: obj.address, emergency: obj.emergency }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});

router.route('/search/:id').get((req, res) => {
    let id = req.params.id;
    event.find({ emergency: "event", $or: [{ name: { $regex: id } }, { event: { $regex: id } }, { code: { $regex: id } }] }).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});


module.exports = router;
