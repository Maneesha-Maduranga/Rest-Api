const getAllPhone = async(req,res) => {
    res.send("Get All Phone")
}

const getSinglePhone = async(req,res) => {
    res.send("Get Single Phone")
}

const createPhone = async(req,res) => {
    res.send("Crearte Phone")
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