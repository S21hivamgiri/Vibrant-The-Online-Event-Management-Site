var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = mongoose.Types.ObjectId;
var userSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: {
        type: Number,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    regisDate: {
        type: String,
        required: true
    },
    regisCloseDate: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true
    },
    cancel: {
        type: Boolean,
        required: true
    },
    end: { type: String, required: false },
    venue: { type: String, required: true },
    sponsors: { type: Array, required: false },
    speakers: { type: Array, required: false },
    users: { type: Array, required: false }
}, {
    versionKey: false
});
const feedback = mongoose.model('events', userSchema);
module.exports = feedback;