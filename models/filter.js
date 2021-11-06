const mongoose= require('mongoose');

const filterSchema= mongoose.Schema({
    brands:{
        type:[String]
    },
    sizes:{
        type:[String]
    },
    genders:{
        type:[String]
    },
    categories:{
        type:[String]
    }
});

module.exports=mongoose.model('filter',filterSchema);