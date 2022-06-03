const mongoose = require("mongoose")

const dbConnect = () => {
    const dburi = process.env.DB_URI;
    mongoose.connect(dburi, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    },
    (err,res) => {
        if(!err){
            console.log(' se conecto')
        } else {
            console.log('error')
        }
    }
    );
};

module.exports = dbConnect;