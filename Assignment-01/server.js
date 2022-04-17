const express = require('express')

const dishRouter = require('./routes/dishRouter')
const leaderRouter = require('./routes/leaderRouter')
const promotionRouter = require('./routes/promotionRouter')

const hostName  = 'localhost'
const PORT = 3000

const app = express()

app.use("/dishes",dishRouter)
app.use("/leaders",leaderRouter)
app.use("/promotions",promotionRouter)

// app.get('/',(req,res)=>{
//     res.send('This is home page')
// })

app.listen(PORT,hostName,function(){
    console.log(`Server is running at //http://${hostName}:${PORT}`)
})
