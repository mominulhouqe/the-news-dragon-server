const express = require('express')
const app = express();
const port = process.env.PORT||5000;
const cors = require('cors')

const catagories = require('./data/Catagories.json')

app.use(cors());

app.get('/', (req, res)=>{

    res.send('Dragon is Running')
});
app.get('/catagrories', (req, res)=>{
    res.send(catagories);
})

app.listen(port, ()=>{
    console.log(`Dragon API is Running Port: ${port}`, );
})
