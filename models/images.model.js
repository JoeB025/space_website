const db = require('../db/connection');

exports.selectImages = () => {
  return db.query('SELECT * FROM images')
  .then((res) => {
    return res.rows 
  })
} 