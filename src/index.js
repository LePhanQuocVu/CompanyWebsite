var express = require('express')
var app = express()
const port = 3000

const poolPromise = require('./config/dbConnect')


app.use(express.json());


app.use('/api/auth', authRoutes);

app.get('/', (req,res) => {
    res.send("Hello");
})

app.listen(port,()=>{
   console.log(`App running on: http://localhost:${port}`);
})  