const db = require('../db/connection');

exports.selectGalaxies = () => {
  return db.query('SELECT * FROM galaxies')
  .then((res) => {
    return res.rows 
  })
}