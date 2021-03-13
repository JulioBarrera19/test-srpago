module.exports = (sequelize, type) => {
    return sequelize.define('reservation', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        buyerUserId: type.INTEGER,
        buyerUsername: type.STRING,
        buyerEmail: type.STRING,
        numTickets: type.INTEGER,
    });
}