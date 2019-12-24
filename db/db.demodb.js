const mysql2 = require("mysql2")
const util = require("util")

require('dotenv').config()

const mypool = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const register = (username, email, hash, phone) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO admin (name,email,password,phone) VALUES (?,?,?,?)`, [username, email, hash, phone])
}

const login = (email, password) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * from admin where email like binary '${email}%' `)
}


const addMenu = (menuName, status) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO menu(menu_name,status) VALUES (?,?)`, [menuName, status])
}

const readMenu = () => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`select * from menu order by menu_name asc`)
}

const updateMenu = (menuId, menuName, status) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`UPDATE menu SET menu_name = "${menuName}",status=${status} WHERE menu_id = ${menuId}`)
}

const addFood = (foodName, image, price, size, menuId, status) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO food(food_name,image,price,size,menu_id,status) VALUES (?,?,?,?,?,?)`, [foodName, image, price, size, menuId, JSON.parse(status)])
}

const readFood = (menuId) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM food where menu_id = ${menuId}`)
}

const updateFood = (foodId, foodName, image, price, size, menuId, status) => {
    query = util.promisify(mypool.query).bind(mypool)
    let img = '';
    if (image) {
        img = `image='${image}',`
    }
    return query(`UPDATE food SET ${img} food_name="${foodName}", price='${price}', size='${size}' , menu_id=${menuId} ,status=${status}
    WHERE food_id= ${foodId}`)
}


const addContact = (address, openingTime, phone) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO contact (address,opening_time,phone) VALUES (?,?,?)`, [address, openingTime, phone])
}

const readContact = () => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM contact`)
}

const readMenuFood = () => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT m.menu_name,f.image,f.price,f.status,f.food_name,f.size,f.food_id,f.menu_id from food As f INNER JOIN menu AS m ON f.menu_id=m.menu_id`)
}

const updateContact = (address, openingTime, phone, contactId) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`UPDATE contact SET address='${address}', phone='${phone}', opening_time='${openingTime}' WHERE contact_id= ${contactId}`)
}

const getFood = () => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM food order by food_name  asc`)
}
const deleteMenu = (menuId, status) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`UPDATE menu SET status=${status} WHERE menu_id=${menuId}`)
}
const getFoodByStatus=()=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`select * from food as f INNER JOIN menu as m on f.menu_id=m.menu_id where f.status=1 order by food_name asc`)
}
const getMenuBystatus=()=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM menu where status=1 order by menu_name asc;`)
}
module.exports = {
    register, login, addMenu, readMenu, addFood, readFood, updateMenu, updateFood, addContact, readContact, updateContact, readMenuFood, getFood,
    deleteMenu,getFoodByStatus,getMenuBystatus
}