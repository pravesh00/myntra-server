const express=require("express");
const router=express.Router();
const productModel=require('../models/product');

router.get('/',async(req,res)=>{
    try{
        const products =await productModel.find()
        res.json(products)
 }catch(err){
     res.send('Error ' + err)
 }
});

module.exports=router;