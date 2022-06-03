const {matchedData} = require('express-validator')
const {encrypt, compare} = require('../utils/handlePassword')
const {tokenSign}= require('../utils/handleJwt')
const {usersModel}= require('../models/index')
const {handleHttpError} = require('../utils/handleError')

const registerController = async (req,res)=>{
    try{
        req = matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined,{strict:false})
    
    const data = {
        token: await tokenSign(dataUser),
        user:dataUser

    }
    
    res.send({data})

    } catch(e){
        handleHttpError(res, 'Error registrando el usuario')
    }

}

const loginController = async (req,res) =>{
try{
    req = matchedData(req);
    const user = await usersModel.findOne({email:req.email}).select('password name role email');
    if(!user){
        handleHttpError(res,'No se encontro el usuario', 404)
        return
    }
    const hashPassword = user.get('password');
    const check = await compare(req.password,hashPassword)

    if(!check){
        handleHttpError(res,'password incorrecta', 401)
        return
    }
    user.set('password', undefined, {strict:false})
    const data = {
        token: await tokenSign(user),
        user
    }
    res.send({data})



}

catch(e){
    handleHttpError(res, 'Error logueando el usuario')
}
}

module.exports = {registerController, loginController};