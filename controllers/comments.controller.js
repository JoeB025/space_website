const { removeCommentsBy, updateCommentVotes } = require('../models/comments.model')


// delete comments

exports.deleteComments = (req, res, next) => {

  const { comment_id } = req.params

  removeCommentsBy(comment_id)
  .then((comment) => {
    res.status(204).send({comment})
  }).catch((err) => {
    next(err)
  })
 }


// update comment votes 
 exports.patchCommentVotes = (req, res, next) => {
  const { comment_id } = req.params
  const incVotes = req.body

  updateCommentVotes(comment_id, incVotes)
  .then((comments) => {
    res.status(200).send({comments})
  }).catch((err) => {
    next(err)
  })
 }