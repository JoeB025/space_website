const db = require('../db/connection');

exports.selectPlanets = () => {
  return db.query('SELECT * FROM planets')
  .then((res) => {
    return res.rows 
  })
}