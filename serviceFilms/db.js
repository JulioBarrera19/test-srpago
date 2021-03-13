const Sequelize = require('sequelize');
const FilmModel = require('./models/films');
const CityModel = require('./models/citys');
const FilmPresentationModel = require('./models/films_presentations');
const ReservationModel = require('./models/reservations');

const sequelize =  new Sequelize('IIiwT57uIL', 'IIiwT57uIL', 'xjRpnillFm', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const City = CityModel(sequelize, Sequelize);
const FilmPresentation = FilmPresentationModel(sequelize, Sequelize);
const Reservation = ReservationModel(sequelize, Sequelize);

Film.hasMany( FilmPresentation, {foreignKey: 'filmId'});
FilmPresentation.belongsTo( Film, {foreignKey: 'filmId'});
City.hasMany( FilmPresentation, {foreignKey: 'cityId'});
FilmPresentation.belongsTo( City, {foreignKey: 'cityId'});
FilmPresentation.hasMany( Reservation, {foreignKey: 'filmPresentationId'});
Reservation.belongsTo( FilmPresentation, {foreignKey: 'filmPresentationId'});

sequelize.sync({ force: false}).then(() => {
    console.log('tablas sincronizadas');
});

module.exports = {
    Film,
    City,
    FilmPresentation,
    Reservation
}