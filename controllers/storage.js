const fs = require('fs')
const { matchedData } = require('express-validator');
const {storageModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const URL = process.env.PUBLIC_URL;
const MEDIAPATH = `${__dirname}/../storage`



const getItems = async (req,res) => {
  try{
    const data =  await storageModel.find({});
    res.send({data})
  }catch(e){
      handleHttpError(res,'error en get items storage')
  }
}
const getItem = async (req,res) => {
    try{
        const {id}= matchedData(req)
        const data =  await storageModel.findById(id);
        res.send({data})
      }catch(e){
          handleHttpError(res,'error en get item storage')
      }
}


const createItems = async (req,res) => {
  try{
    const {body,file} = req
    const fileData = {
        filename : file.filename,
        url: `${URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
  }catch(e){
    handleHttpError(res,'error en create items storage');
  }
}



const deleteItems = async (req,res) => {
  try{
    const {id}= matchedData(req)
    const dataFile =  await storageModel.findById(id);
    await storageModel.delete({_id:id});
    const {filename}= dataFile;
    const Filepath = `${MEDIAPATH}/${filename}`
    
    
    const data = {
      Filepath,
      deleted:1
    }

    res.send({data})

  }catch(e){
      handleHttpError(res,'error en delete item storage')
  }
}







module.exports = {getItems, createItems,  deleteItems,getItem};