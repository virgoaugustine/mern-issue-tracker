const mongoose = require('mongoose')

const Issueschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    responsible:{
        type:String,
        required: true
    },
    description: {
        type:String,
        trim:true,
        default: ''
    },
    date_opened:{
        type: Date,
        default: Date.now
    },
    severity:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Open'
    },
    date_closed:{
        type:Date,
    }
})

const Issue = mongoose.model('Issue', Issueschema)
module.exports = Issue;