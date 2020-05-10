const mongoose= require('mongoose');


const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true

    },
    number :{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true

    },
    contact:[{
        contactName:{
            type:String
        },
        contactNumber : {
            type:Number
        }
    }]
}, {
    timestamps:true

});



const User= mongoose.model('User',userSchema);

module.exports=User;