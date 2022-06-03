const express = require('express');
const { registerController, loginController } = require('../controllers/auth');
const router = express.Router();
const {validatorRegisterItem, validatorLoginItem} = require('../validators/auth')
// /api/auth

router.post('/register', validatorRegisterItem,registerController )
router.post('/login', validatorLoginItem,loginController )



module.exports = router