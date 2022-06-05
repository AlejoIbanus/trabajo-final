const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure:true,
    auth:{
        user:'ibanusale@gmail.com',
        pass:'xievrpznfpkyypvs'
    }
})




module.exports = {transporter};