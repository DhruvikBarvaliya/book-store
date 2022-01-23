const express = require('express');
const router = express.Router();
const authorController = require('../Controllers/AuthorController')

router.get('/', (req, res) => {
    res.send("Inside Author Router");
})

router.post('/addAuthor', authorController.addAuthor)
router.get('/getAllAuthor', authorController.getAllAuthor)
router.get('/getAuthorById?:id', authorController.getAuthorById)
router.put('/updateAuthor?:id', authorController.updateAuthor)
router.delete('/deleteAuthorById?:id', authorController.deleteAuthorById)
router.delete('/deleteAllAuthor', authorController.deleteAllAuthor)

module.exports = router;