const express=require("express");
const sizeModel = require("../models/size");
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        const sizes =await sizeModel.find()
        res.json(sizes)
 }catch(err){
     res.send('Error ' + err)
 }
});

router.post('/add',async(req,res)=>{
    try{
    const size= await new sizeModel({
        name:req.body.name,
        waist:req.body.waist,
        collar:req.body.collar,
        sizeType:req.body.sizeType,
        foot:req.body.foot,
        gender:req.body.gender
    });

    await size.save().then((a)=>{
        res.status(201).json(a);

        console.log("Size Added");
    });
}catch(err){
    res.send('Error'+err);
}
})

module.exports=router;