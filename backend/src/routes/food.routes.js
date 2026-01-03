const express = require('express')
const router = express.Router()
const foodcontroller=require('../controller/food.controller')
const authmiddleware=require('../middleware/authmiddleware')
const multer=require('multer')

const upload=multer({
    storage:multer.memoryStorage(),
})
// protected
//in single give name of video you are passing in frontend
router.post('/',authmiddleware.authfoodpartnermiddleware,upload.single("video"),foodcontroller.createfood)

module.exports=router