const db = require('../Config/Sequelize');
const Book = db.book

module.exports = {

    addBook: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Book Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Book.create(data).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while creating the Book."
            })
        })
    },
    getAllBook: (req, res) => {

    },
    getBookById: (req, res) => {

    },
    getBookByAuthorName: (req, res) => {

    },
    updateBook: (req, res) => {

    },
    deleteBookById: (req, res) => {

    },
    deleteAllBook: (req, res) => {

    }
}