const express = require('express');
const { getItems, createItems, deleteItems,updateItems,getItem } = require('../controllers/tracks');
const router = express.Router();
const {validatorCreateItems,validatorGetItem} = require('../validators/tracks')
const authMiddleware = require('../middleware/session')
// TODO https://localhost/tracks GET, POST, DELETE, PUT

router.get('/', authMiddleware,    getItems)

router.post('/', validatorCreateItems,createItems)

router.get('/:id', validatorGetItem,getItem)

router.put('/:id',validatorGetItem,validatorCreateItems, updateItems)

router.delete('/:id', validatorGetItem, deleteItems)


module.exports = router