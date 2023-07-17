/*
This will hold the schema  for the user

It explains the differnt fields of user and how it will be stored in the mongoose db

*/


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,

    },

    userId :{
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,

    },

    email : {
        type : String,
        required:true,
        unique : true, 
        minLength : 10,
        lowercase : true
    },

    userType : {
        type : String,
        required : true,
        default : "COUSTOMER",
        enum : ["COUSTOMER", "ADMIN"]
    }


},{timestamps : true});

module.exports = mongoose.model("User", userSchema);
