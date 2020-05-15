const express=require('express');

//2
const router=express.Router();





router.use('/v1',require('./v1'));
module.exports=router;