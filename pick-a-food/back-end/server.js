const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./Routers')

app.use(express.json())

app.use(cors({
    origin: '*'
}))

app.use('/', routers);



app.listen(8888, ()=> {
    console.log('server is running on port 8888')
});