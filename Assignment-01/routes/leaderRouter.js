const express = require('express')

const leaderRouter = express.Router()

leaderRouter.get("/",(req,res)=>{
    res.send("All leaders will be send")
})

leaderRouter.get("/:leaderid",(req,res)=>{
    res.send("Sending leaderid "+req.params.leaderid)
})

leaderRouter.post("/",(req,res)=>{
    res.send("Post router doesn't work")
})

leaderRouter.post("/:leaderid",(req,res)=>{
    res.send("Posting leaderid "+req.params.leaderid)
})

leaderRouter.put("/",(req,res)=>{
    res.send("Put router doesn't work")
})

leaderRouter.put("/:leaderid",(req,res)=>{
    res.send("Putting leaderid "+req.params.leaderid)
})

leaderRouter.delete("/",(req,res)=>{
    res.send("All leaders will be delete")
})

leaderRouter.delete("/:leaderid",(req,res)=>{
    res.send("Deleting leaderid "+req.params.leaderid)
})



module.exports = leaderRouter