var express = require('express')
var app = express()

const port = 3000

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port,()=>{
   console.log(`App running on: http://localhost:${port}`);
})