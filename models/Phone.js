const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Joi = require("joi");

const Phone = sequelize.define("Phone", {
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
    notNull: false,
  },
  category: {
    type: DataTypes.STRING,
    isIn: {
      args: [["Apple", "Samsung", "Huawei"]],
      msg: "Must be Apple or Samsung or Huawei",
    },
  },
});

const validateDate = (title, description, price, category) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().min(3).max(50),
    price: Joi.number().required(),
    category: Joi.string().allow(["Apple", "Samsung", "Huawei"]),
  });

  return schema.validate({title,description,price,category})
};

//Create Table For DataBase
const createTable = async () => {
  await Phone.sync();
};

module.exports = {
  Phone,
  createTable,
  validateDate
};
