const db = require('../db/connection');

exports.selectPlanetNames = () => {
  return db.query('SELECT * FROM planet_names')
  .then((res) => {
    return res.rows 
  })
}