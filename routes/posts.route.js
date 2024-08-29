const postsController = require('../controllers/posts.controller')

var express = require('express')

var router = express.Router()

router.post('/add-post', postsController.addPost)
router.get('/get-all-post', postsController.getAllPosts)

module.exports = router
