const db = require('../db/connection');

exports.selectAstronomyInfo = () => {
  return db.query('SELECT * FROM astronomy_info')
  .then((res) => {
    return res.rows 
  })
}