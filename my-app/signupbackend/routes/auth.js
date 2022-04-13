const express = require('express')
const router = express.Router()


const AuthController = require('../controllers/auth')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/forgotpassword', AuthController.forgotPassword)
//router.route("/passwordreset/:resetToken").put(AuthController.resetPassword);
router.put("/passwordreset/:resetToken", AuthController.resetPassword)


module.exports = router
