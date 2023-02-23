const { sequelize } = require("../config/db");
const { Phone, validateData } = require("../models/Phone");
const customError = require("../utils/customError");

const getAllPhone = async (req, res) => {
  const phone = await Phone.findAll();
  res.status(200).json({
    sucess: true,
    count: phone.length,
    data: phone,
  });
};

const getSinglePhone = async (req, res) => {
  const { id } = req.params;

  const phone = await Phone.findAll({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    sucess: true,
    data: phone,
  });
};

const createPhone = async (req, res) => {
  const { title, description, price, category } = req.body;

  const { error, value } = validateData(title, description, price, category);

  // console.log(error,value);

  if (error) {
    throw new customError(error.message, 400);
  }

  const phone = await Phone.create({ title, description, price, category });
  res.status(201).json({
    sucess: true,
    data: phone,
  });
};

const updatePhone = async (req, res) => {

  const { id } = req.params;

  let phone = await Phone.findByPk(id);
  if (!phone) {
    throw new customError("No Phone with Given Id", 400);
  }

  //Validating User Input
  const { title, description, price, category } = req.body;

  const { error, value } = validateData(title, description, price, category);

  if (error) {
    throw new customError(error.message, 400);
  }

  phone = await Phone.update(
    { title, description, price, category },
    {
      where: {
        id: id,
      },
    }

  );

  res.status(200).json({
    sucess: true,
  });
};

const deletePhone = async (req, res) => {
    const { id } = req.params;

    let phone = await Phone.findByPk(id);
    if (!phone) {
      throw new customError("No Phone with Given Id", 400);
    }

    await Phone.destroy({
        where: {
          id: id
        }
      })

    res.status(200).json({
        sucess:true,
        data:{}
    })
};

module.exports = {
  getAllPhone,
  getSinglePhone,
  createPhone,
  updatePhone,
  deletePhone,
};
