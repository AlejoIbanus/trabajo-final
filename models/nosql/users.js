const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const userScheme = new mongoose.Schema(
    {
        name: {
            type:String
        },
        age :{
            type:Number
        },
        email:{
            type:String,
            unique:true

        },
        password:{
            type:String,
            select:false
        },
        role:{
            type:["user","admin"],
            default:"user",
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
userScheme.plugin(mongooseDelete,{overrideMethods:'all'});
module.exports = mongoose.model("Users", userScheme)