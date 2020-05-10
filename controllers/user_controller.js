const User=require('../models/user');


const messagebird = require('messagebird')('NgZxPihtVSBuEVG7BXNP47dZw');


module.exports.signUp=function(req,res){

// if the user is already signin 
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('signup',{
        title: "SIGN UP"
    });
}


module.exports.signIn=function(req,res){

// if the user is already signin 
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('signin',{
        title: "SIGN IN"
    });
}
module.exports.create=function(req,res)
{

    if (req.body.password!=req.body.confirm_password)
    {
        res.redirect('back');
    }


    User.findOne({email:req.body.email},function(err,user){

        if (err){
            console.log('error in finding user in signing up');
            return}

            if (!user){
            User.create(req.body,function(err,user){
                if (err){console.log('error in  signing up');
                return}

                return res.redirect('/users/signIn');
            })
            }
            else{
                return res.redirect('back');
            }

    });
    
}

module.exports.createSession=function(req,res)
{
    return res.redirect('/');
}

module.exports.contactCreate =function(req,res){
	User.findById(req.params.id,function(err,user){
		if(user)
		{
			messagebird.lookup.read( req.body.number, function (err, response) {
            if (err) 
            {
             console.log(err);
             return res.render('home',
              {
            	title:user.name
              });
            }
            if(response)
            {
                
                user.contact.push({contactName:req.body.name,
                    contactNumber:req.body.number, countryCode:response.countryCode,
                    countryPrefix:response.countryPrefix,type:response.type})
			    user.save();
			    return res.render('home',
				{
					title:user.name,
					user:user,
                    indexStart:0

				});
            }
            
            });
			
		}
	})
}
// action for logging out
module.exports.destroySession=function(req,res){
	User.findById(req.params.id,function(err,user){
		if(user)
		{
         req.logout();

    return res.redirect('/');
		}
	});
    
}
module.exports.profile= function (req,res){
    User.findById(req.params.id,function(err,user){
        if(user)
        {
            return res.render('profile',
            {
                title:user.name,
                user:user
            });
        }
        return res.redirect('back');
    });
}

module.exports.delete=function(req,res)
{
    User.findById(req.params.id,function(err,user){
        if(user){
            user.contact.splice(req.params.id1,1);
            user.save();
             return res.render('home',
                {
                    title:user.name,
                    user:user,
                    indexStart:0

                });
        }
    });
}