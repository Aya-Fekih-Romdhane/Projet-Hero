const cors = require('cors');
const express = require ('express');
require('./config/connect')

const heroRoute = require ('./routes/hero');

const app = express();
app.use(express.json());
app.use('/getimage',express.static('./uploads'))
app.use(cors());
//http://127.0.0.1:3000

 app.use ('/hero' ,heroRoute);

app.listen( 3000 ,()=>{
    
    console.log('server work !');

});