const db = require('../Config/Sequelize')
const Author = db.author

module.exports = {

    addAuthor: (req, res) => {
        if (!req.body.name) {
            res.status(400).send({ message: "Author Name Can not be Emapty" })
            return;
        }
        const data = req.body;
        Author.create(data).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Author."
            });
        });
    },
    getAllAuthor: (req, res) => {
        Author.findAll().then(result => {
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
    getAuthorById: (req, res) => {
        let id = req.query.id
        Author.findByPk(id).then(result => {
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
    updateAuthor: (req, res) => {
        let id = req.query.id
        let data = req.body;
        Author.update(data, {
            where: { id: id }
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
    deleteAuthorById: (req, res) => {
        let id = req.query.id
        Author.destroy({ where: { id: id } }).then(result => {
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
    deleteAllAuthor: (req, res) => {
        Author.destroy({ where: {} }).then(result => {
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