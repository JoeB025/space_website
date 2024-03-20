const db = require('../db/connection');

exports.selectBlackHoles = () => {
  return db.query('SELECT * FROM black_holes')
  .then((res) => {
    return res.rows 
  })
}