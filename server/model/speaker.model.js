var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;
var roleSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true }
}, {
    versionKey: false
});
const role = mongoose.model('speakers', roleSchema);
module.exports = role;