const mongoose = require("mongoose")
var Float = require('mongoose-float').loadType(mongoose);
const Schema = mongoose.Schema

const UserExpSchema = new Schema({
    createdBy: {
        type: String
    },
    withWhom: {
        type: String
    },
    expName: {
        type: String
    },
    expAmount: {
        type: Float
    },
    expDes: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = UserExpense = mongoose.model('UserExpense', UserExpSchema)