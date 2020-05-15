const express=require('express');

//2
const router=express.Router();






router.use('/users',require('./user'))
module.exports=router;