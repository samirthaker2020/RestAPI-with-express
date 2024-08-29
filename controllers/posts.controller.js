/* eslint-disable no-unused-vars */
const postsService = require('../services/posts.service')

exports.addPost = (req, res) => {
  const data = {
    description: req.body.description,
    imagePath: req.body.imagePath,
    addedByUserId: req.body.addedByUserId
  }

  postsService.addPost(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: 'Bad request' })
    }
    return res.status(200).send({
      success: 1,
      data: results
    })
  })
}
exports.getAllPosts = (req, res, next) => {
  const data = {};
  postsService.getAllPosts(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};