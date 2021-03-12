module.exports = (sequelize, type) => {
    return sequelize.define('rel_film_city', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }/* ,
        filmId: type.INTEGER,
        cityId: type.INTEGER */
    });
}

/* module.exports = (sequelize, type) => {
    const tableRelFilmsCity = sequelize.define('rel_film_city', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }/* ,
        filmId: type.INTEGER,
        cityId: type.INTEGER 
    });
    tableRelFilmsCity.associate = function(models) {
        tableRelFilmsCity.belongsTo(models.FilmModel, {foreignKey: 'filmId'})
    }
    return tableRelFilmsCity
} */