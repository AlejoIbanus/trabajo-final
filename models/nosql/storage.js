const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const storageScheme = new mongoose.Schema(
    {
        url: {
            type:String
        },
        filename:{
            type:String
        }
        
    },
    {
        timestamps:true,
        versionKey:false,
    }
);
storageScheme.plugin(mongooseDelete,{overrideMethods:'all'});
module.exports = mongoose.model("storage", storageScheme)