const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');



const getItems = async (req,res) => {
   try{
    const user = req.user;
    const data =  await tracksModel.find({});
    res.send({data,user})
   } catch(e){
       handleHttpError(res,'error en get items');
   }
}
const getItem = async (req,res) => {
    try{
    req = matchedData(req);
    const {id} = req;
    const data = await tracksModel.findById(id);
    res.send({data});
    }catch(e){
        handleHttpError(res,'error en get item')
    }
}


const createItems = async (req,res) => {
    try{
    const body = matchedData(req);
    const data = await tracksModel.create(body)
    res.send({data})
    } catch(e){
        handleHttpError(res,'error en create items')
    }
    
}


const updateItems = async (req,res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id,body)
        res.send({data})
        } catch(e){
            handleHttpError(res,'error en update items')
        }
        
}
const deleteItems = async (req,res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id});
        res.send({data});
        }catch(e){
            handleHttpError(res,'error en delete item')
        }
}







module.exports = {getItems, createItems, updateItems, deleteItems,getItem};