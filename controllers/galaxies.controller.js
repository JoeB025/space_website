const { selectGalaxies } = require('../models/galaxies.model')

exports.getGalaxies = ( req, res, next) => {
  selectGalaxies()
  .then((galaxy) => {
      res.status(200).send({galaxy})
    })
  .catch((err) => {
      next(err)
    })
} 