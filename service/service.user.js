const {demodb} = require('../db')


const readMenu = () =>{
    return demodb.readMenu()
}

const readFood = (menuId) =>{
   return demodb.readFood(menuId)
}

const getFood = ()=>{
   return demodb.getFood()
}
const getFoodByStatus =() =>{
   return demodb.getFoodByStatus()
}
const getMenuBystatus=()=>{
   return demodb.getMenuBystatus()
}
module.exports = {
   readMenu,readFood,getFood,getFoodByStatus,getMenuBystatus
}