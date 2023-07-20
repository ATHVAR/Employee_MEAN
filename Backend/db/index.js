const mongoose = require('mongoose');

require("dotenv").config();                                                   
const ConnectionString = process.env.mongodb_url; 

mongoose.connect(ConnectionString)
.then(()=>{
    console.log(`Connection to Database established`);
})
.catch((error)=>{
    console.log(`Error in connecting to database ${error.message}`)
})