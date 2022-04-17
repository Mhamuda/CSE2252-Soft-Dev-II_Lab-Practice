const express = require('express')
const mongoose = require('mongoose')    //1

const dishRouter = require('./routes/dishRouter')
const leaderRouter = require('./routes/leaderRouter')
const promotionRouter = require('./routes/promotionRouter')

const hostName  = 'localhost'
const PORT = 3000

const app = express()

const url  = "mongodb://localhost:27017/Practice"    //2
const connect = mongoose.connect(url)   //3

connect.then((db)=>{    //4
    console.log("Successfully connecting")
},(err)=>{
    console.log("Connection failed")
})

app.use("/dishes",dishRouter)
app.use("/leaders",leaderRouter)
app.use("/promotions",promotionRouter)

// app.get('/',(req,res)=>{
//     res.send('This is home page')
// })

app.listen(PORT,hostName,function(){
    console.log(`Server is running at //http://${hostName}:${PORT}`)
})
