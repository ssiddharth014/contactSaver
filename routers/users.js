const express=require('express');

//6
const router=express.Router();
const passport=require('passport');
//2


//4
const usersController=require('../controllers/user_controller');

router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);



router.post('/create',usersController.create);
router.post('/contactCreate/:id',usersController.contactCreate);
router.get('/signOut/:id',usersController.destroySession);
router.get('/profile/:id',usersController.profile);


router.post('/create-session',passport.authenticate("local",
{failureRedirect :'/users/signIn'}),
usersController.createSession
);




module.exports=router;