const express = require('express')
const router = express.Router()
const authcontroller=require('../controller/auth.controller')

router.post('/user/register',authcontroller.registeruser)
router.post('/user/login',authcontroller.loginuser)
router.get('/user/logout',authcontroller.logoutuser)

router.post('/food-partner/register',authcontroller.registerFoodPartner)
router.post('/food-partner/login',authcontroller.loginFoodPartner)
router.get('/food-partner/logout',authcontroller.logoutFoodPartner)
module.exports = router