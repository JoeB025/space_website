const db = require('../db/connection')


// delete comments 
exports.removeCommentsBy = (comment_id) => {

  let query =
  `DELETE FROM comments 
  WHERE comment_id = $1;`

  return db.query(query, [comment_id])
  .then((result) => {
    if (result.rowCount === 0) {
      return Promise.reject({
        status: 404,
        msg: 'article does not exist'
      });
    }
    return result.rows[0]
  })
}


// update comment votes 
exports.updateCommentVotes = (comment_id, incComment) => {

  let query = 
  `UPDATE comments
  SET votes = votes + ${incComment.inc_votes}
  WHERE comment_id = ${comment_id}
  RETURNING *`

  return db.query(query)
  .then((res) => {
    if (res.rowCount === 0) {
      return Promise.reject({
        status: 404,
        msg: 'comment does not exist'
      });
    }
    return res.rows[0]
  })
}