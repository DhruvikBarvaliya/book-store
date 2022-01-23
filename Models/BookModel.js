
module.exports = (sequelize, Sequelize) => {
    const book = sequelize.define('book', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        price: { type: Sequelize.DECIMAL },
        published_date: { type: Sequelize.DATEONLY },
        author_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'author',
                key: 'id'
            }
        },
        title: { type: Sequelize.STRING },
        no_of_pages: { type: Sequelize.INTEGER },
        catagary: { type: Sequelize.STRING },
        edition: { type: Sequelize.STRING },
        languages: { type: Sequelize.STRING },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
        {
            freezeTableName: true
        })
    return book;
}
