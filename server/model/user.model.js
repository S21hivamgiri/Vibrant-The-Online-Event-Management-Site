var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    terms: { type: Boolean, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    initials: { type: String, required: true },
    country: { type: String, required: true },
    code: { type: String, required: true },
    otp: { type: String, required: false },
    offer: { type: Boolean, required: true },
    loginTime: { type: Date, required: false },
    cart: { type: Array, required: false },
    purchased: { type: Array, required: false },
    isFeedBackGiven: { type: Boolean, required: false },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles'
    }]
}, {
    versionKey: false
});
const user = mongoose.model('users', userSchema);
module.exports = user;