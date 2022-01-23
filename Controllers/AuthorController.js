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

    },
    getAuthorById: (req, res) => {

    },
    updateAuthor: (req, res) => {

    },
    deleteAuthorById: (req, res) => {

    },
    deleteAllAuthor: (req, res) => {

    }
}