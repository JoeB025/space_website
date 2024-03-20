const { selectAstronomyInfo } = require('../models/astronomyInfo.model')

exports.getAstronomyInfo = ( req, res, next) => {
  selectAstronomyInfo()
  .then((astronomy) => {
      res.status(200).send({astronomy})
    })
  .catch((err) => {
      next(err)
    })
} 