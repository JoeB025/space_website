const { selectPlanetNames } = require('../models/planetNames.model')

exports.getPlanetNames = ( req, res, next) => {
  selectPlanetNames()
  .then((planetNames) => {
      res.status(200).send({planetNames})
    })
  .catch((err) => {
      next(err)
    })
}