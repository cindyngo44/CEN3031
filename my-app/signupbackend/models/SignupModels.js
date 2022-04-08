const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now

    }
});


const User= mongoose.model('mytable', signUpTemplate)
module .exports = User