const express = require('express')
const router = express.Router()
const authController = require('../Controller/authController')

router
.post('/signup',authController.createEmployee)
.post('/login',authController.login)

exports.router=router;