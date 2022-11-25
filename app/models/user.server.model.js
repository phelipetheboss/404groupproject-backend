let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
   password: {
       type: String,
       default: "",
       trim: true,
       required: "password is required"
   },
    email: {
        type: String,
        default: "",
        trim: true,
        required: "email is required"
    },
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: "Display Name is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},{
    collection: "users"
});

let options = ({ missingPasswordError: "Wrong / Missing Password"});


module.exports = mongoose.model('User', User);