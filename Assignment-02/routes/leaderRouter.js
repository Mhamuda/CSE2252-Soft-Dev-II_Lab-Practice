const express = require('express')
const bodyParser = require('body-parser')
const leaders = require('../models/leader')

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())

leaderRouter.get("/",(req,res)=>{
    //res.send("All leaders will be send")
    leaders.find({}).then((leader)=>{
        res.json(leader)
    })
})

leaderRouter.get("/:leaderid",(req,res)=>{
    //res.send("Sending leaderid "+req.params.leaderid)
    leaders.findById(req.params.leaderid).then((leader)=>{
        res.json(leader)
    })
})

leaderRouter.post("/",(req,res)=>{
    //res.send("Post router doesn't work")
    leaders.create(req.body).then((leader)=>{
        res.json(leader)
    })
})

leaderRouter.post("/:leaderid",(req,res)=>{     //postid hoina
    res.send("Posting leaderid "+req.params.leaderid)
})

leaderRouter.put("/",(req,res)=>{    //put hoina
    res.send("Put router doesn't work")
})

leaderRouter.put("/:leaderid",(req,res)=>{   //putid hoina
    res.send("Putting leaderid "+req.params.leaderid)
})

leaderRouter.delete("/",(req,res)=>{
    //res.send("All leaders will be delete")
    leaders.remove().then((resp)=>{
        res.send("All deleted")
    })
})

leaderRouter.delete("/:leaderid",(req,res)=>{
    //res.send("Deleting leaderid "+req.params.leaderid)
    leaders.findByIdAndRemove(req.params.leaderid).then((resp)=>{
        res.send("Deleted")
    })
})


module.exports = leaderRouter