const User = require('../../../models/user');

const jwt = require('jsonwebtoken');

module.exports.createSession= async function(req,res){

 

    try
    {
          let user= await User.findOne({number : req.body.number})



               if(! user || user.password!=req.body.password)
           {
	                  return res.json(422,
	                   {
		          message :"Invalid username/password"
	              });   
	           return res.json(200,
	          {
		        message:'Sign in successfully, heres your token ',
		         data : {
			             token : jwt.sign(user.toJSON(),'social',{expiresIn : '100000'})
		                 }
	           })
	     
            }

    }
     catch(err)
	    {
		    console.log("**********",err);
		       return res.json(500,
		    {
			message:'Internal server error'
		    })
	    }
}
