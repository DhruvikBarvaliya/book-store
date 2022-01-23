const Sequelize = require('sequelize');
const database = require('./Database');

const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
    host: database.HOST,
    dialect: database.dialect,
    operatorsAliases: false,

    pool: {
        max: database.pool.max,
        min: database.pool.min,
        acquire: database.pool.acquire,
        idle: database.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.author = require("../Models/AuthorModel")(sequelize, Sequelize);
db.book = require("../Models/BookModel")(sequelize, Sequelize);


module.exports = db;
