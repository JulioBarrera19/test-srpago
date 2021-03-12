const Sequelize = require('sequelize');
const FilmModel = require('./models/films');
const CityModel = require('./models/citys');
const RelFilmsCitysModel = require('./models/rel_films_citys');

const sequelize =  new Sequelize('IIiwT57uIL', 'IIiwT57uIL', 'xjRpnillFm', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

/* const sequelize =  new Sequelize('FglHr8Z4cm', 'FglHr8Z4cm', 'HpN5wukTVL', {
    host: 'remotemysql.com',
    dialect: 'mysql'
}); */

const Film = FilmModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);
const RelFilmsCitys = RelFilmsCitysModel(sequelize, Sequelize);

Film.hasMany( RelFilmsCitys, {foreignKey: 'filmId'});
RelFilmsCitys.belongsTo( Film, {foreignKey: 'filmId'});
City.hasMany( RelFilmsCitys, {foreignKey: 'cityId'});
RelFilmsCitys.belongsTo( City, {foreignKey: 'cityId'});

sequelize.sync({ force: false}).then(() => {
    console.log('tablas sincronizadas');
});

module.exports = {
    Film,
    City,
    RelFilmsCitys
}