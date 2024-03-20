const { selectPlanets } = require('../models/planets.model')

exports.getPlanets = ( req, res, next) => {
  selectPlanets()
  .then((planet) => {
      res.status(200).send({planet})
    })
  .catch((err) => {
      next(err)
    })
} 