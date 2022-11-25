let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LoginResponse = new Schema({
    success: {
        type: Boolean,
        default: false,
        trim: true,
        required: "username is required"
    },
    token: {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    }

},{
    collection: "loginResponse"
});

module.exports = mongoose.model('LoginResponse', LoginResponse);