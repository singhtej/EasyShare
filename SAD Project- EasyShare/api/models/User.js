const mongoose = require("mongoose")
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    expAmount: {
        type: Float
    },
    youOwe: {
        type: Float
    },
    youGet: {
        type: Float
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)