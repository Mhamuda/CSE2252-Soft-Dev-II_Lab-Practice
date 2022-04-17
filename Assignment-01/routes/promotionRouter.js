const express = require('express')

const promotionRouter = express.Router()

promotionRouter.get("/",(req,res)=>{
    res.send("All promotions will be send")
})

promotionRouter.get("/:promoid",(req,res)=>{
    res.send("Sending promoid "+req.params.promoid)
})

promotionRouter.post("/",(req,res)=>{
    res.send("Post doesn't work")
})

promotionRouter.post("/:promoid",(req,res)=>{
    res.send("Posting promoid "+req.params.promoid)
})

promotionRouter.put("/",(req,res)=>{
    res.send("Put doesn't work")
})

promotionRouter.put("/:promoid",(req,res)=>{
    res.send("Putting promoid "+req.params.promoid)
})

promotionRouter.delete("/",(req,res)=>{
    res.send("All promotion router will be delete")
})

promotionRouter.delete("/:promoid",(req,res)=>{
    res.send("Deleting promoid "+req.params.promoid)
})

module.exports = promotionRouter