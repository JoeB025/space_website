const { selectBlackHoles } = require('../models/blackHoles.model')

exports.getBlackHoles = ( req, res, next) => {
  selectBlackHoles()
  .then((blackHoles) => {
      res.status(200).send({blackHoles})
    })
  .catch((err) => {
      next(err)
    })
} 