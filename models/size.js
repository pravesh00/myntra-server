const mongoose= require('mongoose');

const sizeSchema= mongoose.Schema({
   name:{
       type:String
   },
   gender:{
       type:String
   },
   sizeType:{
       type:String
   },
   waist:{
       type:String
   },
   
   
});

module.exports=mongoose.model('product',productSchema);