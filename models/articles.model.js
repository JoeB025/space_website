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

  const validTopicQueries = ['Astronomy', 'Moons', 'Planet', 'Black Holes', 'Supernova', 'Dwarf Planet', '']
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