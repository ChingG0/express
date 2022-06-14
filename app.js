// Include express
const express = require('express')
const app = express()

//define server
const port = 3000

//setting the route response
//localhost:3000/
app.get('/',(req,res)=>{
    res.send('This is my first Express Web App!!')
})

//localhost:3000/food
app.get('/food',(req,res)=>{
    res.send('My favorite food is ice cream!!')
})

//localhost:3000/popular/languages
app.get('/popular/languages',(req,res)=>{
    res.send('Javascript is a popular language')
})

//params
// :
app.get('/popular/languages/:language',(req,res)=>{
    const lang = req.params.language
    res.send(`${lang} is a popular language`)
})


//Listen and start the server
app.listen(port,()=>{
    console.log(`Express is running on http://localhost:${port}`)
})