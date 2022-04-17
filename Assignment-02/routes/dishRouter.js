const express = require('express')
const bodyParser = require('body-parser')
const dishRouter = express.Router()

const dishes = require('../models/dish')
dishRouter.use(bodyParser.json())

dishRouter.get("/",(req,res)=>{
    //res.send("All dishes will be send")
    dishes.find({}).then((dish)=>{
        res.json(dish)
    })
})

dishRouter.get("/:dishid", (req, res) =>{
    //res.send("Sending dishid "+req.params.dishid)
    dishes.findById(req.params.dishid).then((dish)=>{
        res.json(dish)
    })
})

dishRouter.post("/",(req,res)=>{
    //res.send("Post ROUTER doesn't work")
    dishes.create(req.body).then((dish)=>{
        res.send("dish created")
    })
})

dishRouter.post("/:dishid",(req,res)=>{     // postid hoina
    res.send("Posting dishId "+req.params.dishid)
})

dishRouter.put('/',(req,res)=>{     //put hoina
    res.send("put ROUTER does't work")
})

dishRouter.put('/:dishid',(req,res)=>{  //putid  hoina
    res.send("Putting dishid "+req.params.dishid)
})

dishRouter.delete('/',(req,res)=>{
    //res.send('All dishes will be delete')
    dishes.remove().then((resp)=>{
        res.send("All deleted")
    })
})

dishRouter.delete('/:dishid',(req,res)=>{
    //res.send("DeletinG dishid "+req.params.dishid)
    dishes.findByIdAndRemove(req.params.dishid).then((resp)=>{
        res.send("deleted")
    })
})

module.exports = dishRouter