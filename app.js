const express = require('express');
const app = new express();
const cookieParser = require('cookie-parser');
const router = require('./src/routes/api')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors');
const hpp = require('hpp');
require('dotenv').config();
const mongoose = require('mongoose');


app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cookieParser());

// Middleware to parse JSON data with a size limit of 50mb
app.use(express.json({ limit: '50mb' }));

// Middleware to parse URL-encoded data with a size limit of 50mb
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// rate limite here

const limiter = rateLimit({ windowMs: 15 * 60 * 60, max: 4000 })
app.use(limiter)


let URI = process.env.MONGO_URL;
let OPTION = {user : process.env.USER, pass : process.env.PASSWORD, autoIndex : true};

mongoose.connect(URI,OPTION)
    .then((res)=> {
        console.log("DB Connected")
    })
    .catch((err)=> {
        console.log(err)
    })


app.use("/api/v1", router);
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
});


module.exports = app;






