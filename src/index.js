var express = require('express')
const authRoutes = require('./routes/authRoutes');
var app = express()
const port = 3000

app.use(express.json());


app.use('/api/auth', authRoutes);

app.get('/', (req,res) => {
    res.send("Hello");
})

app.listen(port,()=>{
   console.log(`App running on: http://localhost:${port}`);
})  