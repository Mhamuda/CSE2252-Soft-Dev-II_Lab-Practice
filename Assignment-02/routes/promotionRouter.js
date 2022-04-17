const express = require('express')
const bodyParser = require('body-parser')
const promotions = require('../models/promotion')

const promotionRouter = express.Router()
promotionRouter.use(bodyParser.json())

promotionRouter.get("/",(req,res)=>{
    //res.send("All promotions will be send")
    promotions.find({}).then((promo)=>{
        res.json(promo)
    })
})

promotionRouter.get("/:promoid",(req,res)=>{
    //res.send("Sending promoid "+req.params.promoid)
    promotions.findById(req.params.promoid).then((promo)=>{
        res.json(promo)
    })
})

promotionRouter.post("/",(req,res)=>{
    //res.send("Post doesn't work")
    promotions.create(req.body).then((promo)=>{
        res.json(promo)
    })
})

promotionRouter.post("/:promoid",(req,res)=>{   //postid hoina
    res.send("Posting promoid "+req.params.promoid)
})

promotionRouter.put("/",(req,res)=>{     //put hoina
    res.send("Put doesn't work")
})

promotionRouter.put("/:promoid",(req,res)=>{    //putid hoina
    res.send("Putting promoid "+req.params.promoid)
})

promotionRouter.delete("/",(req,res)=>{
    //res.send("All promotion router will be delete")
    promotions.remove().then((resp)=>{
        res.send("All deleted")
    })
})

promotionRouter.delete("/:promoid",(req,res)=>{
    //res.send("Deleting promoid "+req.params.promoid)
    promotions.findByIdAndRemove(req.params.promoid).then((resp)=>{
        res.send("Deleted")
    })
})

module.exports = promotionRouter