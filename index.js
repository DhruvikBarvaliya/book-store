const express = require('express');
const app = express();
const indexRouter = require('./Routers/IndexRouter');
const db = require('./Config/Sequelize');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
app.use(indexRouter)
app.listen(3000, console.log("Server is Running on Port No 3000 "))