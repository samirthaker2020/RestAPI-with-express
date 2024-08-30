const postsController = require('../controllers/posts.controller');

var express = require('express');

var router = express.Router();

router.post('/add-post', postsController.addPost);
router.post('/add-post-comment', postsController.addPostComment);
router.get('/get-all-post', postsController.getAllPosts);
router.get('/get-post-all-comments', postsController.getPostAllComments);
router.put('/dislike-post', postsController.dislikePost);
router.put('/like-post', postsController.likePost);
router.delete('/delete-post', postsController.deletePost);
module.exports = router;
