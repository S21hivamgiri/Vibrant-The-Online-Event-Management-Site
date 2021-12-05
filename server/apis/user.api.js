var express = require('express');
var httpStatus = require('http-status-codes');
var router = express.Router();
const user = require('../model/user.model');

router.route('/').get((req, res) => {
    user.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.put('/update/cart/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    user.findByIdAndUpdate(id, { "cart": data }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});


router.put('/update/feedback/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    user.findByIdAndUpdate(id, { "isFeedBackGiven": true }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});

router.route('/add').post((req, res) => {
    const obj = req.body;
    user.create(obj).then(docs => {
        res.status(httpStatus.CREATED).send(obj);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/delete/:id').delete((req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/:id').get((req, res) => {
    let id = req.params.id;
    user.findById(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.put('/edit/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id, { name: obj.name, email: obj.email, country: obj.country, code: obj.code, user: obj.user, address: obj.address, emergency: obj.emergency }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});

router.put('/cart/:id', (req, res) => {
    let id = req.params.id;
    let date = req.body;
    user.findByIdAndUpdate(id, { "$push": { "cart": date } }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});


router.put('/purchase/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    user.findByIdAndUpdate(id, { "cart": [], "$push": { "purchased": data } }, (err, doc) => {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        }
        else
            res.status(httpStatus.OK).send(doc);
    });
});

router.route('/search/:id').get((req, res) => {
    let id = req.params.id;
    user.find({ emergency: "user", $or: [{ name: { $regex: id } }, { user: { $regex: id } }, { code: { $regex: id } }] }).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

module.exports = router;
