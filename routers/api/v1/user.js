const express=require('express');

//2
const router=express.Router();


const usersApi = require('../../../controllers/api/v1/users_api');


router.post('/create-session',usersApi.createSession);
module.exports=router;