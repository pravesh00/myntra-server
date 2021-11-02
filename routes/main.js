const express=require("express");
const router=express.Router();

router.get('/',async(req,res)=>{
    try{
        res.send("This is Shitapp's Myntra Build");
 }catch(err){
     res.send('Error ' + err)
 }
});

module.exports=router;