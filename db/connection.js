// const { Pool } = require('pg');
// const ENV = process.env.NODE_ENV || 'development';

// require('dotenv').config({
//   path: `${__dirname}/../.env.${ENV}`,
// });

// if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
//   throw new Error('PGDATABASE not set or DATABASE_URL not set');
// }


// const config = {}

// if (ENV === 'production') {
//   config.connectionString = process.env.DATABASE_URL;
//   config.max = 2;
// }


// module.exports = new Pool(config);

const { Pool } = require('pg');
const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `${__dirname}/../.env.${ENV}`,
});


console.log('ENV:', ENV);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('DATABASE_URL:', process.env.DATABASE_URL);

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error('PGDATABASE not set or DATABASE_URL not set');
}

const config = {};

if (ENV === 'production') {
  config.connectionString = process.env.DATABASE_URL;
  config.ssl = {
    rejectUnauthorized: false
  };
} else {
  config.database = process.env.PGDATABASE;
}

module.exports = new Pool(config);
