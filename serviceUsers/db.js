const Sequelize = require('sequelize');
const UserModel = require('./models/users')

const sequelize =  new Sequelize('IIiwT57uIL', 'IIiwT57uIL', 'xjRpnillFm', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

/* const sequelize =  new Sequelize('FglHr8Z4cm', 'FglHr8Z4cm', 'HpN5wukTVL', {
    host: 'remotemysql.com',
    dialect: 'mysql'
}); */

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false}).then(() => {
    console.log('tablas sincronizadas');
});

module.exports = {
    User
}