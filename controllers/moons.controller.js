const { selectMoons } = require('../models/moons.model')

exports.getMoons = ( req, res, next) => {
  selectMoons()
  .then((moon) => {
      res.status(200).send({moon})
    })
  .catch((err) => {
      next(err)
    })
} 