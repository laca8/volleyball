const mongoose = require('mongoose')
const changePlayerSchema = mongoose.Schema({
    player_out:{
        type:String,
        required:true
    },
    player_in:{
        type:String,
        required:true
    },
    time_now:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },

},{
    timeStamps:true
})
module.exports = mongoose.model('changePlayer',changePlayerSchema)