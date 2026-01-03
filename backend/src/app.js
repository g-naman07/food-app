const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const authroutes = require('./routes/auth.routes')
const foodroutes=require('./routes/food.routes')

app.use(express.json())
app.use(cookieParser()) 

app.get('/',(req,res)=>{
    res.send('hi');
})
    
app.use('/api/auth',authroutes)  //wrting /api/auth is not necessary
app.use('/api/food',foodroutes) 








module.exports=app