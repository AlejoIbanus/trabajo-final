const {handleHttpError} = require('../utils/handleError');




const checkRol =(roles)=> (req,res,next)=>{
    try{
        const {user}= req;
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle)=> rolesByUser.includes(rolSingle));
        if(!checkValueRol){
            handleHttpError(res, 'no tenes permiso ',403);
            return;
        }
        next()
    }catch(e){
        handleHttpError(res,'error en permisos de usuarios',403)
    }
    
    
}

module.exports = checkRol;