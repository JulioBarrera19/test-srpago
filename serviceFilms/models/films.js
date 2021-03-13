module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.TEXT,
        score: type.INTEGER,
        director: type.STRING,
        genre: type.STRING
    });
}