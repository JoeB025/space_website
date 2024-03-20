const { selectStars } = require('../models/stars.model')

exports.getStars = ( req, res, next) => {
  selectStars()
  .then((stars) => {
      res.status(200).send({stars})
    })
  .catch((err) => {
      next(err)
    })
} 