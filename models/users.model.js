const db = require('../db/connection')

exports.selectUsers = () => {
  return db.query('SELECT * FROM users')
  .then((res) => {
    return res.rows
  })
}


exports.selectUserByUsername = (username) => {
  const query = `SELECT * FROM users WHERE username = $1`;

  return db.query(query, [username])
    .then((res) => {
      if (res.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: 'User not found'
        });
      } 
      return res.rows[0];
    });
};