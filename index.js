'use strict';

const { PORT, 
  DB_URL_MONGO }  = require('./config');

const cors        = require('cors');
const express     = require('express');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const logger      = require('log123').createLogger('');
const app         = express();
const compression = require('compression');
app.disable('x-powered-by');

const { router: authRouter        } = require('./routers/auth');
const { router: pagesRouter       } = require('./routers/pages');
const { router: reportsRouter     } = require('./routers/reports');
const { router: siteContentRouter } = require('./routers/site-content');
const { router: contentRouter     } = require('./routers/content-edit');

app.use(compression());

mongoose.Promise = global.Promise;

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: () => process.env.NODE_ENV === 'test'
  })
);

const allowedOrigins = typeof process.env.ALLOWED_ORIGINS  === 'string' ?
  process.env.ALLOWED_ORIGINS.split(',') : [] ;
const allowedOriginsHash = {};
allowedOrigins.forEach(o=>{
  allowedOriginsHash[o] = true;
});

app.use(
  cors({
    origin: function(origin, callback){
      const _origin = `${origin}`; // this converts undefined to 'undefined' to allow PostMan if .env includes undefined as an origin
      if(!allowedOriginsHash[_origin]){
        // console.error(_origin, 'is not allowed via',allowedOriginsHash);
        callback(new Error(`origin ${origin} not allowed by CORS`));
      } else {
        // console.log(_origin, 'is allowed');
        callback(null, true);
      }
    }
  })
);

app.use('/api/auth',             authRouter);
app.use('/api/pages',            pagesRouter);
app.use('/api/reports',          reportsRouter);
app.use('/api/site-content',     siteContentRouter);
app.use('/api/content-edit',     contentRouter);

let server;

function runServer(port=PORT, url=DB_URL_MONGO) {
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
        .listen(port, () => { // always
          const now = new Date();
          logger.info(`As of ${now}, The LBG Content Server is listening on port ${port}. Mode: ${process.env.NODE_ENV}. Database: ${process.env.DB_MODE}`);
          resolve();
        })
        .on('error', err => {
          logger.error(`Express failed to start ${err}`);
        });
    });
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
