
module.exports = (sequelize, Sequelize) => {
    const author = sequelize.define('author', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        date_of_birth: { type: Sequelize.DATEONLY },
        sex: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        zip_code: { type: Sequelize.INTEGER },
        state: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    {
        freezeTableName: true
    })
    return author;
}
