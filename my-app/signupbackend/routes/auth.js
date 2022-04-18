const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth");


const AuthController = require('../controllers/auth')


//router.get("/register", AuthController.register)
//router.get('/register', auth, AuthController.register)
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/forgotpassword', AuthController.forgotPassword)
//router.route("/passwordreset/:resetToken").put(AuthController.resetPassword);
router.put("/resetpassword/:resetToken", AuthController.resetPassword)
router.get('/profile', auth, AuthController.profile)
router.post('/tokenIsValid', AuthController.tokenIsValid)


module.exports = router
