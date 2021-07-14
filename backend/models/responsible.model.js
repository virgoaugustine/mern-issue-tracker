const mongoose = require('mongoose')

const responsibleSchema = new mongoose.Schema({
    name: {type:String, required:true}
})

const Responsible = mongoose.model('Responsible', responsibleSchema)
module.exports = Responsible;