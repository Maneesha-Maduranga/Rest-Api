const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect:   'postgres'
});


const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("DataBase Connection established succesfully");
    } catch (error) {
        console.log(error.original);
        process.exit(1)
    }
}

module.exports = {
    connectDb,
    sequelize
}