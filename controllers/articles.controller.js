const {
  selectArticles,
  selectOrderedArticles,
  selectArticleComments,
  insertNewComment,
  updateVotes,
  insertNewArticle,
} = require("../models/articles.model");
const { checkArticles } = require("../db/seeds/utils");

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
  const { sort_by, order, topic } = req.query;

  selectOrderedArticles(sort_by, order, topic)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getArticleComments = (req, res, next) => {
  const { article_id } = req.params;
  const { sort_by, order } = req.query;

  const checkForComments = checkArticles(article_id);
  const sortedComments = selectArticleComments(article_id, sort_by, order);

  Promise.all([checkForComments, sortedComments])
    .then((comments) => {
      res.status(200).send({ comments: comments[1] });
    })
    .catch((err) => {
      next(err);
    });
};

exports.insertComments = (req, res, next) => {
  const newComment = req.body;
  const { article_id } = req.params;

  insertNewComment(newComment, article_id)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchVotes = (req, res, next) => {
  const { article_id } = req.params;
  const incVotes = req.body;

  updateVotes(article_id, incVotes)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postArticle = (req, res, next) => {
  const newArticle = req.body;
  newArticle.created_at = new Date().toISOString();
  console.log("New Article Data:", newArticle);

  insertNewArticle(newArticle)
    .then((article) => {
      console.log("Article inserted:", article);
      res.status(201).send({ article });
    })
    .catch((err) => {
      console.error("Error inserting article:", err);
      next(err);
    });
};
