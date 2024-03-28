const { selectPlanets, selectPlanetsById } = require('../models/planets.model')
 

exports.getPlanets = ( req, res, next) => {
  selectPlanets()
  .then((planet) => {
      res.status(200).send({planet})
    })
  .catch((err) => {
      next(err)
    })
} 



exports.getPlanetsById = ( req, res, next) => {

  const { planets_id } = req.params;

  selectPlanetsById(planets_id)
  .then((planet) => {
      res.status(200).send({planet})
    })
  .catch((err) => {
      next(err)
    })
} 