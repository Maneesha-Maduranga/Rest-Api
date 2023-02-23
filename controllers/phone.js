const {sequelize} = require('../config/db')
const {Phone} = require('../models/Phone')

const getAllPhone = async(req,res) => {
   const phone =   await Phone.findAll()
   res.status(200).json({
    sucess:true,
    count:phone.length,
    data:phone
   })
}

const getSinglePhone = async(req,res) => {
   
    const {id} = req.params
    
   const phone =   await Phone.findAll({where:{
    id: id
   }})
   res.status(200).json({
    sucess:true,
    data:phone
   })
}

const createPhone = async(req,res) => {
    const {title,description,price,category} = req.body
    const phone = await Phone.create({title,description,price,category})
    res.status(201).json({
        sucess:true,
        data:phone
    })
}

const updatePhone = async(req,res) => {
    res.send("Update Phone")
}

const deletePhone = async(req,res) => {
    res.send("Delete Phone")
}

module.exports = {
    getAllPhone,
    getSinglePhone,
    createPhone,
    updatePhone,
    deletePhone
}