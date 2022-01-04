const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;