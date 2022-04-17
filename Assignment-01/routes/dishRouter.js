const express = require('express')
const dishRouter = express.Router()

dishRouter.get("/",(req,res)=>{
    res.send("All dishes will be send")
})

dishRouter.get("/:dishid", (req, res) =>{
    res.send("Sending dishid "+req.params.dishid)
})

dishRouter.post("/",(req,res)=>{
    res.send("Post ROUTER doesn't work")
})

dishRouter.post("/:dishid",(req,res)=>{
    res.send("Posting dishId "+req.params.dishid)
})

dishRouter.put('/',(req,res)=>{
    res.send("put ROUTER does't work")
})

dishRouter.put('/:dishid',(req,res)=>{
    res.send("Putting dishid "+req.params.dishid)
})

dishRouter.delete('/',(req,res)=>{
    res.send('All dishes will be delete')
})

dishRouter.delete('/:dishid',(req,res)=>{
    res.send("DeletinG dishid "+req.params.dishid)
})

module.exports = dishRouter