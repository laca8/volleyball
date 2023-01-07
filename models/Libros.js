const mongoose = require('mongoose')
const libroSchema = mongoose.Schema({
    libro:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('libro',libroSchema)