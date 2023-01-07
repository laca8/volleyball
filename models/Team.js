const mongoose = require('mongoose')
const teamSchema = mongoose.Schema({
    club:{
        type:String,
    },
    name:{
        type:String
    },
    number:{
        type:String
    },
    position:{
        type:String
    }

})
module.exports = mongoose.model('team',teamSchema)