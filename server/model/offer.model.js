var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;
var roleSchema = new Schema({
    _id: { type: objectId, auto: true },
    code: { type: String, required: true },
    value: { type: Number, required: false },
    description: { type: String, required: true },
    type: { type: String, required: true }
}, {
    versionKey: false
});
const role = mongoose.model('offers', roleSchema);
module.exports = role;