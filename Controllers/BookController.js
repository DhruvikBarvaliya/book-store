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
        Book.findAll().then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Recived"
                })
            }
        })
    },
    getBookById: (req, res) => {
        let id = req.params.id
        Book.findByPk(id).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Recived"
                })
            }
        })
    },
    getBookByAuthorId: (req, res) => {
        let id = req.params.author_id
        Book.findOne({ where: { author_id: id } }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Recived",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail Recived"
                })
            }
        })
    },
    updateBook: (req, res) => {
        let id = req.params.id
        let data = req.body;
        Book.update(data, {
            where: { id }
        }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Updated",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Updated"
                })
            }
        })
    },
    deleteBookById: (req, res) => {
        let id = req.params.id
        Book.destroy({ where: { id } }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Deleted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Deleted"
                })
            }
        })
    },
    deleteAllBook: (req, res) => {
        Book.destroy({ where: {} }).then(result => {
            if (result) {
                res.json({
                    success: 1,
                    message: "Data Deleted",
                    data: result
                })
            } else {
                res.json({
                    success: 0,
                    message: "Fail To Deleted"
                })
            }
        })
    }
}