const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    timezine: "-03:00"
});


module.exports = connection;