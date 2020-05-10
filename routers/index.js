//1
const express=require('express');

//2
const router=express.Router();

//4
const homeController=require('../controllers/home_controller');


//6


//for any other router access from here
//router.use('/routerName',require('./routerFile'))



//5
router.get('/',homeController.home);
//
//router.use('/users',require('./users'));

//for any other router access from here
//router.use('/routerName',require('./routerFile'))
//3
module.exports=router;

