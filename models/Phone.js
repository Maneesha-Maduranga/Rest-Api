const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')

const Phone = sequelize.define('Phone', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    max: 50,                  
    min: 3,  
  },
  price: {
    type: DataTypes.FLOAT,
    notNull: true,
  },
  category:{
    type:DataTypes.STRING,
    isIn: {
      args: [['Apple', 'Samsung','Huawei']],
      msg: "Must be Apple or Samsung or Huawei"
    }
  }
},);

//Create Table For DataBase
const createTable = async () => {
  await Phone.sync();
}

module.exports = {
  Phone,
  createTable
}