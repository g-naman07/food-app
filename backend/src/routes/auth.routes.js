const express = require('express')
const router = express.Router()
const authcontroller=require('../controller/auth.controller')

router.post('/user/register',authcontroller.registeruser)


module.exports = router