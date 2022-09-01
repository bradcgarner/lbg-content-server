'use strict';

const { PORT, 
  DB_URL_MONGO } = require('./config');
const express          = require('express');
const mongoose         = require('mongoose');
const logger           = require('log123').createLogger(''); // logs to console if no filename
const app              = express();
const { compileData }  = require('./config-db/compile-data');

mongoose.Promise = global.Promise;

let server; 

function runServer(port=PORT, url = DB_URL_MONGO) {
  const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false,
  };
  return new Promise((resolve, reject) => {
    mongoose.connect(url, mongoSettings, err => {
      if (err) {
        logger.error(`Mongoose failed to connect: ${err}`);
        return reject(err);
      }
      server = app
        .listen(port, () => {
          logger.info(`As of ${new Date()}, StormWatch is listening on port ${port}. Mode: ${process.env.NODE_ENV}. Database: ${process.env.DB_MODE}`);
          resolve();
        })
        .on('error', err => {
          logger.error(`Express failed to start ${err}`);
        });
    });
  })
    .then(()=>{
      compileData();
    });
}

function closeMongoServer() {
  return mongoose.disconnect()
    .then(() => {
      return new Promise((resolve, reject) => {
        logger.info('Closing server');
        server.close(err => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      });
    });
}

// if called directly, vs 'required as module'
if (require.main === module) { // i.e. if server.js is called directly (so indirect calls, such as testing, don't run this)
  runServer().catch(err => logger.error(err));
}

module.exports = { app, runServer, closeMongoServer };