const {userController} = require('../controller')
const express = require('express')
const router = express.Router()


router.get("/getFood/:menuId",userController.readFood)
router.get("/getMenu",userController.readMenu)
router.get("/getFood",userController.getFood)
router.get("/getFoodbyStatus",userController.getFoodByStatus)
router.get("/getMenubyStatus",userController.getMenuBystatus)
module.exports= router