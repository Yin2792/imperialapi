const response = require('../model/response')
const { userService } = require('../service')


const readMenu = (req, res) => {
    userService.readMenu().then(data => {
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const readFood = (req, res) => {
    const menuId = req.params.menuId
    userService.readFood(menuId).then(data => {
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}
const getFood = (req, res) => {
    userService.getFood().then(data => {
        console.log(data)
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}
const getFoodByStatus = (req, res) => {
    userService.getFoodByStatus().then(data => {
        console.log(data)
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}
const getMenuBystatus = (req, res) => {
    userService.getMenuBystatus().then(data => {
        console.log(data)
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}
module.exports = {
    readMenu, readFood, getFood, getFoodByStatus,getMenuBystatus
}