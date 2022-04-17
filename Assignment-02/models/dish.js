const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dishSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    price: {
        type: Number,
        require:true
    },
    description:{
        type:String,
        require:false
    }
})

let dishes = mongoose.model("dishes",dishSchema)
module.exports = dishes