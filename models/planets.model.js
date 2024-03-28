const db = require('../db/connection');

exports.selectPlanets = () => {
  return db.query('SELECT * FROM planets')
  .then((res) => {
    return res.rows 
  })
}


exports.selectPlanetsById = (planets_id) => {
  return db.query('SELECT * FROM planets WHERE planets.planets_id=$1', [planets_id])
  .then((res) => {
    if (res.rows.length === 0) {
      return Promise.reject({
        status: 404,
        msg: 'Page does not exist'
      })
    } 
  return res.rows[0]
  })
}
