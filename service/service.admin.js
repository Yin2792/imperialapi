const { demodb } = require('../db')

const addMenu = (menuName,status) =>{
    return demodb.addMenu(menuName,status)
}

const addFood = (foodName,image,price,size,menuId,status) =>{
     return demodb.addFood(foodName,image,price,size,menuId,status)
}

const updateMenu = (menuId,menuName,status) =>{
    return demodb.updateMenu(menuId,menuName,status)
}

const updateFood = (foodId,foodName,image,price,size,menuId,status)=>{
    return demodb.updateFood(foodId,foodName,image,price,size,menuId,status)
}

const addContact = (address,openingTime,phone)=>{
    return demodb.addContact(address,openingTime,phone)
}

const readContact = () =>{
    return demodb.readContact()
}
const readMenuFood = () =>{
    return demodb.readMenuFood()
}

const updateContact = (address,openingTime,phone,contactId) =>{
    return demodb.updateContact(address,openingTime,phone,contactId)
}
const deleteMenu =(menuId,status)=>{
   return demodb.deleteMenu(menuId,status)
}

module.exports= { 
    addMenu,addFood,updateMenu,updateFood,addContact,readContact,updateContact,readMenuFood,deleteMenu
}