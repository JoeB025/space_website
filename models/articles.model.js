const db = require('../db/connection'); 


exports.selectArticles = (article_id) => {
  
  let query = `
  SELECT articles.*,
  COUNT(comments.comment_id) AS comment_count  
  FROM articles
  LEFT JOIN comments ON articles.article_id = comments.article_id 
  WHERE articles.article_id=$1
  GROUP BY articles.article_id;`

return db.query(query, [article_id])
  .then((result) => {
    if (result.rows.length === 0) {
      return Promise.reject({
        status: 404,
        msg: 'article does not exist'
      })
    } 
  return result.rows[0]
}) 
}



exports.selectOrderedArticles = (sort_by = 'created_at', order = 'desc', topic = '') => {

  const validSortQueries = ['created_at']
  if(!validSortQueries.includes(sort_by)) {
    return Promise.reject({ status : 400, msg : 'invalid sort_by query'})
  }

  const validTopicQueries = ['Astronomy', 'Moons', 'Planet', 'Black Holes', 'Supernova', 'Dwarf Planet', 'Testing', '']
  if(!validTopicQueries.includes(topic)) {
    return Promise.reject({ status : 400, msg : 'Not a valid topic!'})
  }

  let query = `
        SELECT
        articles.author, articles.title, articles.article_id,
        articles.topic, articles.created_at, articles.votes, articles.article_img_url,
        COUNT(comments.article_id) AS number_of_comments
        FROM articles
        LEFT JOIN comments ON articles.article_id = comments.article_id
        `;

      const queryParameters = [];

      if(topic) {   
        query += ` WHERE topic = $1`;
        queryParameters.push(topic)
      }

      query += 
        ` GROUP BY articles.article_id
         ORDER BY articles.${sort_by} ${order};`
         
    return db.query(query, queryParameters).then((result) => {
        return result.rows
    })
}


exports.selectArticleComments = (article_id, sort_by = 'created_at', order = 'desc') => {
  let query =`
  SELECT *
  FROM comments
  WHERE article_id=$1
  ORDER BY ${sort_by} ${order};
  `
  return db.query(query, [article_id]).then((res) => {
    return res.rows
  })
}


exports.insertNewComment = ({body, username}, article_id) => {

  let query =
  `
  INSERT INTO comments (body, author, article_id)
  VALUES ($1, $2, $3)
  RETURNING *
  `;
  return db.query(query, [body, username, article_id])
  .then((res) => {
    if (res.rows.length === 0) {
      return Promise.reject({
        status: 404,
        msg: 'article does not exist'
      })
    }
    return res.rows
  })
}




exports.updateVotes = (article_id, incComment) => {

  let query =
  `UPDATE articles
  SET votes = votes + ${incComment.inc_votes}
  WHERE article_id = ${article_id} 
  RETURNING *`

  return db.query(query)
  .then((res) => {

    if (res.rowCount === 0) {
      return Promise.reject({
        status: 404,
        msg: 'article does not exist'
      });
    }
    return res.rows[0]
  })
}



exports.insertNewArticle = ({ topic, title, author, body, article_img_url }) => {
  // console.log("Inserting new article...", topic, title, author, body, article_img_url);
  // console.log(topic, 'topic <<<')
  // console.log(title, 'title <<<')
  // console.log(author, 'author <<<')
  // console.log(body, 'body <<<')
  // console.log(article_img_url, 'article_img_url <<<')
  let query = ` 
    INSERT INTO articles (topic, title, author, body, article_img_url)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *, (
      SELECT COUNT(comment_id) AS comment_count
      FROM comments
      WHERE comments.article_id = articles.article_id
    ) AS comment_count;
  `;

  return db.query(query, [topic, title, author, body, article_img_url])
    .then((res) => {
      console.log("New article inserted:", res.rows[0]);
      console.log(res.rows[0].topic, '<<<<<<<<<<<< ')
      return res.rows[0];
    })
    .catch((err) => {
      // console.error("Error inserting new article:", err);
      throw err;
    });
};

