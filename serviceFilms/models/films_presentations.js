module.exports = (sequelize, type) => {
    return sequelize.define('film_presentation', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: type.DATE,
        seatsAvailable: type.INTEGER,
        seatsTotal: type.INTEGER
        /* ,
        filmId: type.INTEGER,
        cityId: type.INTEGER */
    });
}