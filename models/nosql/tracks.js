const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const tracksScheme = new mongoose.Schema(
    {
        name: {
            type:String
        },
        email:{
            type:String,
        },
        cover:{
            type:String,
            validate:{
               validator: (req)=>{
                return true;
            },
            message:"error_url",
        },
    },  
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String,
            },
        },
        duration:{
            start:{
                type:Number,
            },
            end:{
                type:Number,
            },

        },
        mediaID:{
            type:mongoose.Types.ObjectId,
        },
    },
        {
            versionKey:false,
            timestamps:true,
        }
);
tracksScheme.plugin(mongooseDelete,{overrideMethods:'all'});
module.exports = mongoose.model("Tracks", tracksScheme)