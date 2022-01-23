const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/BookController');



router.get('/', (req, res) => {
    res.send("Inside Book Router");
})

router.post('/addBook', bookController.addBook)
router.get('/getAllBook', bookController.getAllBook)
router.get('/getBookById/:id', bookController.getBookById)
router.get('/getBookByAuthorName/:name', bookController.getBookByAuthorName)
router.put('/updateBook/:id', bookController.updateBook)
router.delete('/deleteBookById/:id', bookController.deleteBookById)
router.delete('/deleteAllBook', bookController.deleteAllBook)

module.exports = router;