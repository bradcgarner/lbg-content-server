'use strict';

const { DATABASE_URL, TEST_DATABASE_URL } = require('./config');
let dbMode = process.env.DB_MODE;

const dbConfigurations = {
  production: {
    client: 'pg',
    connection: DATABASE_URL,
    pool: { 
      min: 0, 
      max: 3,
      propagateCreateError: false, // <- default is true, set to false
    },
    debug: false
  },

  test: {
    client: 'pg',
    connection: TEST_DATABASE_URL,
    pool: { 
      min: 0, 
      max: 3,
      propagateCreateError: false, // <- default is true, set to false
    },
    debug: false
  }
};


// "pool": {
//   "min": 2,
//   "max": 6,
//   "createTimeoutMillis": 3000,
//   "acquireTimeoutMillis": 30000,
//   "idleTimeoutMillis": 30000,
//   "reapIntervalMillis": 1000,
//   "createRetryIntervalMillis": 100,
//   "propagateCreateError": false // <- default is true, set to false
// },
const dbConfig = dbConfigurations[dbMode];

module.exports = require('knex')(dbConfig);