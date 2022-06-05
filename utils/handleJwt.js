const jsonwebtoken = require('jsonwebtoken');
const JWTSECRET = process.env.JWT_SECRET
const tokenSign = async (user,time)=>{
    const sign = await jsonwebtoken.sign(
        {
        _id: user._id,
        role: user.role,
        
        
        },
        JWTSECRET,
        {
            expiresIn:time,
        }
        
    );
    return sign
}

const verifyToken = async (tokenJwt)=>{
    try{
        return jsonwebtoken.verify(tokenJwt,JWTSECRET)
    }catch(e){
        return null
    }
}

module.exports = {tokenSign,verifyToken};