const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const authroutes = require('./routes/auth.routes')


app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hi');
})

app.use('/api/auth',authroutes)  //wrting /api/auth is not necessary








module.exports=app