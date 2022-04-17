const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promotionSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    label:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    featured:{
        type:String,
        require:false
    }
})

let promotions = mongoose.model("promotions",promotionSchema)
module.exports = promotions