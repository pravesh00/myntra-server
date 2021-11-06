const express = require('express');
const app=express();
require('dotenv/config')
const morgan=require('morgan');
const mongoose=require('mongoose');


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


const api=process.env.API_VER;

app.use(express.json());
app.use(morgan('tiny'));

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Database Connected");
});

app.use((req, res, next) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  next();
})

//Product api
const productRoute = require('./routes/product')
app.use('/products',productRoute)

//Main api
const mainRoute = require('./routes/main')
app.use('/',mainRoute)

//Filter Api
const filterRoute= require('./routes/filter')
app.use('/filter',filterRoute)

