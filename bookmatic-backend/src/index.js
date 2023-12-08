const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();

const db = require('./models/index');
const APIRoutes = require('./routes/index.js');


const PORT = process.env.PORT;


const prepareAndStartServer = ()=>{
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true})); 
    app.use('/api',APIRoutes);
    if(true){
        db.sequelize.sync({alter:false});
    }  

    app.listen(PORT ,async ()=>{
    console.log(`Server Started on Port : ${PORT}`);
    })
}

prepareAndStartServer();