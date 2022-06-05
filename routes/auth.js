const express = require('express');
const { registerController, loginController,RecoveryControllerEmail, resetController, savedNewPass} = require('../controllers/auth');
const router = express.Router();
const {validatorRegisterItem, validatorLoginItem, validatorRecoveryEmailItem, validatorReset} = require('../validators/auth')
// /api/auth

router.post('/register', validatorRegisterItem,registerController )
router.post('/login', validatorLoginItem,loginController )
router.post('/forgotPassword', validatorRecoveryEmailItem, RecoveryControllerEmail )
router.get('/reset/:token', resetController )
router.post('/reset/:token', validatorReset, savedNewPass )




module.exports = router