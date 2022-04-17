const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leaderSchema =new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    abbr:{
        type:String,
        require:true
    },
    descriotion:{
        type:String,
        require:true
    },
    featured:{
        type:String,
        require:false
    }
})

let leaders = mongoose.model("leaders",leaderSchema)
module.exports = leaders