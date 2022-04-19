const axios = require('axios');
const express = require('express');
const ejs = require('ejs');

const app = express();




const port = 3001 || process.env.PORT
app.listen(port , async(req,res)=>{
    console.log("Server listening on port " + port)
})