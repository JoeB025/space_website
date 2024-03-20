const { selectArticles, selectOrderedArticles, selectArticleComments } = require('../models/articles.model')
const { checkArticles } = require('../db/seeds/utils')


exports.getArticles = (req, res, next) => {
  const { article_id } = req.params;

  selectArticles(article_id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};


exports.getOrderedArticles = (req, res, next) => {
  const { sort_by, order, topic } = req.query 

  selectOrderedArticles(sort_by, order, topic).then((article) => {
    res.status(200).send({ article });
  })
  .catch((err) => {
    next(err)
  })
}


exports.getArticleComments = (req, res, next) => {
  const { article_id } = req.params;
  const { sort_by, order } = req.query

 const checkForComments = checkArticles(article_id)
  const sortedComments = selectArticleComments(article_id, sort_by, order)

  Promise.all([checkForComments, sortedComments])
  .then((comments) => {
    res.status(200).send({comments : comments[1]});
  })
  .catch((err) => {
    next(err)
  })
}