const db = require('../db/connection');

exports.selectStars = () => {
  return db.query('SELECT * FROM stars')
  .then((res) => {
    return res.rows 
  })
}