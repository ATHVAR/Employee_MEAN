const express = require('express');                                           
const app = express();  
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cors = require('cors');
app.use(cors());
require("dotenv").config();                                                   
const ConnectionString = process.env.PORT;   
const morgan = require('morgan');
app.use(morgan('dev'));
const PORT = 3000; 
const db = require('./db/index');
const api=require('./routers/router');
app.use('/api',api);
app.listen(PORT,()=>{                                                         
console.log(`Server is running on ${PORT}`);                             
})