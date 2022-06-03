const express = require('express');
const { getItems, createItems, deleteItems,updateItems,getItem } = require('../controllers/tracks');
const router = express.Router();
const {validatorCreateItems,validatorGetItem} = require('../validators/tracks')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol');
// TODO https://localhost/tracks GET, POST, DELETE, PUT

router.get('/', authMiddleware,    getItems)

router.post('/', authMiddleware,   checkRol(['admin']), validatorCreateItems,createItems)

router.get('/:id',authMiddleware, validatorGetItem,getItem)

router.put('/:id', authMiddleware,validatorGetItem,validatorCreateItems, updateItems)

router.delete('/:id',authMiddleware, validatorGetItem, deleteItems)


module.exports = router