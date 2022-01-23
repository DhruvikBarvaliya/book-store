const express = require('express');
const router = express.Router();
const authorRouter = require('./AuthorRouter')
const bookRouter = require('./BookRouter');

router.get('/', (req, res) => {
    res.send("Inside Index Router")
})

router.use('/api',
    authorRouter,
    bookRouter
)

module.exports = router