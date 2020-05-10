const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://contact:contact@contact-u0win.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});

const db=mongoose.connection;


db.on('error',console.error.bind(console,"error in connecting to mongodb"));






db.once('open',function(){
    console.log('connected to database :: mongodb');
});

module.exports=db;
