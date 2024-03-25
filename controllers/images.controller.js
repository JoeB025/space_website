const { selectImages } = require('../models/images.model')

exports.getImages = ( req, res, next) => {
  selectImages()
  .then((image) => {
      res.status(200).send({image})
    })
  .catch((err) => {
      next(err)
    })
} 