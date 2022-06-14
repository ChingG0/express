// Include express
const express = require('express')
const app = express()

//define server
const port = 3000

//setting the route response
//local host:3000/
app.get('/',(req,res)=>{
    res.send('this is my first Express Web App')
})