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

router.post('/add',async(req,res)=>{
    try{
        const product= await new productModel({
            brand:req.body.brand,
            size:req.body.size,
            gender:req.body.gender,
            category:req.body.category,
            url:req.body.url
        });

        await product.save().then((a)=>{
            res.status(201).json(a);

            console.log("Product Added");
        });

    }catch(err){
        res.send('Error'+err);
    }
})

router.post('/search',async(req,res)=>{
    const brands= await req.body.brands;
    const sizes= await req.body.sizes;
    const gender = await req.body.sizes;
    const categories = await req.body.categories;

    

})

module.exports=router;