const handleHttpError = (res,message = 'mensaje por defecto', code = 403) =>{
    res.status(code);
    res.send({error:message});
};



module.exports = {handleHttpError}