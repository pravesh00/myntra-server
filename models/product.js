const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    brand:{
        type:String
    },
    size:{
        type:String
    },
    gender:{
        type:String
    },
    category:{
        type:String
    },
    url:{
        type:String
    }
});

module.exports=mongoose.model('product',productSchema);