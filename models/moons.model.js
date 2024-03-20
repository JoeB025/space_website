const db = require('../db/connection');

exports.selectMoons = () => {
  return db.query('SELECT * FROM moons')
  .then((res) => {
    return res.rows 
  })
}