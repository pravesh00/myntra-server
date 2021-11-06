const express=require("express");
const router=express.Router();
const filterModel=require('../models/filter');

router.get('/',async(req,res)=>{
    try{
        const filters =await filterModel.find()
        res.json(filters)
 }catch(err){
     res.send('Error ' + err)
 }
});

router.post('/add',async(req,res)=>{
    try{
        const filters= await new filterModel({
            brands:req.body.brands,
            sizes:req.body.sizes,
            genders:req.body.genders,
            categories:req.body.categories
        });

        await filters.save().then((a)=>{
            res.status(201).json(a);

            console.log("Filter Added");
        });

    }catch(err){
        res.send('Error'+err);
    }
})



module.exports=router;