var express = require('express')
var app = express()
const { connectDB } = require('./config/dbConnect')
const port = 3000


connectDB();

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port,()=>{
   console.log(`App running on: http://localhost:${port}`);
})