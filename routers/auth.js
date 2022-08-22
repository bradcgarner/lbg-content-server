'use strict';

const express                 = require('express');
const router                  = express.Router();
const bcrypt                  = require('bcryptjs');
const generator               = require('generate-password');
const jwt                     = require('jsonwebtoken');
const { 
  validateRawKnex,
  isPrimitiveNumber }         = require('conjunction-junction');
const { 
  JWT_SECRET,
  JWT_EXPIRY, 
  authFile }                  = require('../config');
const logger                  = require('log123').createLogger(authFile);
const { respondToError }      = require('../comm/responses');
const { handleAttemptedHack } = require('../comm/hack');
const knex                    = require('../db-sql');
const { 
  hasSql, 
  keysToOmitHash }            = require('../helpers/_security');

router.use(express.json());

const makeCamel = true;

const hashPassword = password => {
  return bcrypt.hash(password, 12);
};

const validatePassword = (suppliedPW, userPW) => {
  return bcrypt.compare(suppliedPW, userPW);
};

const createAuthToken = user => {
  return jwt.sign(
    {user},      // object to encrypt
    JWT_SECRET,
    {            // object has a fixed format; do not edit (subject can be another string)
      subject: user.username,
      expiresIn: JWT_EXPIRY,
      algorithm: 'HS256'
    }
  );
};

const userIsAdmin = userContainer => {
  return userContainer && 
    userContainer.contents &&
    userContainer.contents.user &&
    Array.isArray(userContainer.contents.user.permissions) &&
    userContainer.contents.user.permissions.includes('admin');
};

const getUserPermissions = userContainer => {
  return userContainer && 
    userContainer.contents &&
    userContainer.contents.user &&
    Array.isArray(userContainer.contents.user.permissions) ?
    Array.isArray(userContainer.contents.user.permissions) :
    [];
};

const routesAllowed = {
  GET: {
    user: {
      '/api/pages/sales-training': true,
    },
    general: {
      '/api/keys' : true, // copy this to detention-model as well
      '/api/pages/dev-installation' : true,
      '/api/pages/drain-edge' : true,
      '/api/pages/ftp' : true,
      '/api/pages/installation-guidelines' : true,
      '/api/pages/products' : true,
      '/api/pages/profile-properties' : true,
      '/api/pages/sitemap-private' : true,
      '/api/pages/sales-training': true,
      '/api/products-private/lists' : true,
      '/api/products-private' : true,
    },
    admin: {
      '/api/users/*' : true,
      '/api/reports': true,
      '/api/pages/reports' : true,
      '/api/challenge-private': true,
      '/api/pages/challenge-private': true,
    },
    review: {
      '/api/users' : true,
    },
    courses: {
      '/api/sessions/courses' : true,
      '/api/sessions' : true,
      '/api/sessions/path' : true,
      '/api/attendees' : true,
      '/api/pages/session-create' : true,
      '/api/pages/sessions-list' : true,
      '/api/pages/challenge-private': true,
    },
    'dev-installation': {
      '/api/pages/dev-installation' : true,
    },
    ftp: {
      '/api/pages/ftp' : true,
    },
    'installation-guidelines': {
      '/api/pages/installation-guidelines' : true,
    },
    'profile-properties': {
      '/api/keys' : true,
      '/api/pages/profile-properties' : true,
      '/api/pages/sales-training': true,
    },
    'detention-model': {
      '/api/keys' : true,
      '/api/pages/detention-model' : true,
      '/api/projects' : true,
      '/api/projects/*' : true, // * is user id
      '/api/projects/nearest' : true,
    },
    'sitemap-private': {
      '/api/pages/sitemap-private' : true,
    },
    products: {
      '/api/pages/products' : true,
      '/api/products-private/lists' : true,
      '/api/products-private' : true,
      '/api/pages/sales-training': true,
    },
    hydro: {
      '/api/pages/stormwatch' : true,
      '/api/pages/sales-training': true,
    },
    contentEdit: {
      '/api/content-edit/faq': true,
      '/api/content-edit/terminology': true,
      '/api/pages/faq': true,
      '/api/pages/terminology': true,
      '/api/pages/sales-training': true,
    },
  },
  POST: {
    admin: {
      '/api/users' : true,
    },
    user: {
      '/api/auth/relogin' : true,
    },
    // all: {
    //   '/api/auth/relogin' : true,
    //   '/api/projects/print': true,
    // },
    'detention-model': {
      '/api/projects/print': true,
      '/api/projects/copy': true,
    },
    hydro: {
      '/api/projects/stormwatch/*' : true,
    },
    courses: {
      '/api/sessions' : true,
      '/api/attendees' : true,
    },
  },
  PUT: {
    admin: {
      '/api/users/*' : true,
      '/api/users/*/pw' : true,
    },
    contentEdit: {
      '/api/content-edit/faq': true,
      '/api/content-edit/terminology': true,
    },
    // all: {
    //   '/api/users/*/pw' : true,
    //   '/api/projects' : true, 
    //   '/api/projects/path' : true,
    //   '/api/projects/share' : true,
    //   '/api/projects/calc' : true,
    //   '/api/users/hide-project' : true,
    // },
    'detention-model': {
      '/api/projects' : true, // there is no post, only put
      '/api/projects/path' : true,
      '/api/projects/share' : true,
      '/api/projects/calc' : true,
      '/api/users/hide-project' : true,
    },
    user: {
      '/api/users/*/pw' : true,
    },
    review: {
      '/api/projects/reviewer' : true,
    },
    courses: {
      '/api/sessions/request-close' : true,
      '/api/sessions' : true,
      '/api/attendees' : true,
    },
  },
  DELETE: {
    admin: {

    },
  },
};

const pathsAllowed = {
  sessions: {
    '3': 'path',
  },
  projects: {
    '3': {
      path: 'path',
      share: 'share',
      calc: 'calc',
      nearest: 'nearest',
      reviewer: 'reviewer',
      stormwatch: 'stormwatch',
      print: 'print',
      all: '*',
    }
  },
  'products-private': {
    '3': {
      lists: 'lists'
    }
  },
  'content-edit': {
    '3': {
      faq:         'faq',
      terminology: 'terminology',
    }
  }
};

// add all urls to admin
for(let method in routesAllowed){
  for(let permission in routesAllowed[method]){
    if(permission !== 'admin'){
      for(let url in routesAllowed[method][permission]){
        if(!routesAllowed[method].admin[url]){
          routesAllowed[method].admin[url] = true;
        }
      }
    }
  }
}

const getTokenFromReq = req => {
  if(!req){
    return;
  }
  if(!req.headers){
    return;
  }
  const tokenWithBearer = req.headers.authorization;
  if(typeof tokenWithBearer !== 'string'){
    return;
  }
  const token = tokenWithBearer.slice(7,tokenWithBearer.length);
  return token;
};

const readUserFromReq = req => {
  const token = getTokenFromReq(req);
  if(!token){
    return {};
  }
  const user = jwt.verify(token, JWT_SECRET, (err,decod)=>decod) || {};
  if(user.user){
    return user.user;
  }
  return user;
};

const jwtStrategy = (req, res, next, userContainer={})=>{
  // this is middleware, so don't throw (it won't make it back to the calling function)
  // instead respond on error, and the calling function is never called
  // see next() at the end, which calls the calling function if this passes
  // step 1: check header or url parameters or post parameters for token
  const token = getTokenFromReq(req);
  if(!token){
    res.status(403).json({
      message:'No Token'
    });
  } else {
    //Decode the token
    jwt.verify(token, JWT_SECRET, (err,decod)=>{
      if(err){
        res.status(403).json({
          message:'Wrong Token'
        });
      } else {
        //If decoded then call next() so that respective route is called.
        req.decoded = decod;
        userContainer.contents = req.decoded;
        if(!Array.isArray(userContainer.contents.user.permissions)){
          res.status(403).json({
            message:`Cannot read permissions for ${userContainer.contents.username}`,
          });
        } else {
          if(userContainer.exp < userContainer.iat) {
            res.status(403).json({
              message:'Expired Token'
            });
          } else if(!routesAllowed[req.method]) {
            res.status(403).json({
              message:`Sorry, ${req.method} access not granted to you, ${userContainer.contents.username}`
            });
          } else {
            const urlOnly = req.originalUrl.split('?')[0];
            const urlArray = urlOnly.split('/');
            const u2 = urlArray[2];
            const urlArrayAdjusted = urlArray.map((u,i)=>{
              const iString = `${i}`;
              const asInt = parseInt(u, 10);
              const isNum = isPrimitiveNumber(asInt);
              const segment =
                u === '' ? '' :
                  isNum && `${asInt}` === `${u}` ? '*' :
                    pathsAllowed[u2] && 
                  typeof pathsAllowed[u2][iString] === 'string' ?
                      pathsAllowed[u2][iString] :
                      pathsAllowed[u2] && 
                    pathsAllowed[u2][iString] && 
                    pathsAllowed[u2][iString][u] ?
                        pathsAllowed[u2][iString][u] :
                        pathsAllowed[u2] && 
                      pathsAllowed[u2][iString] &&
                      pathsAllowed[u2][iString].all ?
                          pathsAllowed[u2][iString].all :
                          u;
              return segment;
            });

            const url = urlArrayAdjusted.join('/');
            const allowedPermission = userContainer.contents.user.permissions.find(p=>{
              if(routesAllowed[req.method][p] && // soft match
                routesAllowed[req.method][p][url]){
                return true;
              } else if(routesAllowed[req.method][p] && // exact match
                routesAllowed[req.method][p][urlOnly]){
                return true;
              }
            });

            // logger.info('endpoint sought', req.originalUrl, '(',url,')','permission', allowedPermission, 'userContainer',userContainer);
            if(!allowedPermission) {
              res.status(403).json({
                message:'Sorry, access not granted to you.', // ${userContainer.contents.username}`
              });
            } else {
              next();
            }
          } // end if expired / else if no routes found / else check allowedPath
        }   // end if no permissions / else permissions
      }     // end if err / else no err
    });     // end verify token function
  }         // end if no token / else token
};

router.post('/login', (req, res) => {
  const foundHack = hasSql(req.body,keysToOmitHash)||hasSql(req.params.path)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('POST/api/auth/login',req,res,foundHack);
  }
  let authToken, userFound;
  if(typeof req.body.username !== 'string') {
    // all responses are 200 so that we control the message being sent back
    res.status(200).json({ message: 'missing username' });
    return;
  } else if(!req.body.password){
    res.status(200).json({ message: `missing password for ${req.body.username}` });
    return;
  } else {
    const lowercaseUsername = req.body.username.toLowerCase();
    const rawSql = `select * from users where username = '${lowercaseUsername}';`;
    return knex.raw(rawSql)
      .then(found => {
        const users = Array.isArray(found.rows) ? found.rows : [] ;
        if(users.length <= 0) {
          const extraMessage = lowercaseUsername.includes('@') ? ' (username is different from email address)' : '' ;
          return res.status(200).json({ message: `user ${lowercaseUsername} not found${extraMessage}` });
        }
        userFound = users[0];
        return validatePassword(req.body.password, userFound.password);
      })
      .then(isValid => {
        if(!userFound){
          return; // already responded
        }
        if(!isValid) {
          return res.status(200).json({ message: `incorrect password for ${lowercaseUsername}` });
        } else {
          const userForToken = {
            id: userFound.id,
            username: userFound.username,
            permissions: userFound.permissions,
          };
          authToken = createAuthToken(userForToken);
          const userForResponse = {
            id:          userFound.id,
            username:    userFound.username,
            firstName:   userFound.first_name,
            lastName:    userFound.last_name,
            authToken:   authToken,
            pwReset:     userFound.pw_reset,
            permissions: userFound.permissions,
          };
          return res.status(200).json(userForResponse);
        }
      })
      .catch(err => {
        respondToError(err, res);
      });
  }
});

router.post('/relogin', (req, res) => {
  const authToken = req.body.authToken;
  const foundHack = hasSql(req.body,keysToOmitHash)||hasSql(req.params.path)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('POST/api/auth/relogin',req,res,foundHack);
  }
  let idUser = null;

  if(authToken){
    return new Promise(resolve=>{
      resolve(
        jwt.verify(authToken,JWT_SECRET,(err,decod)=>{
          if(!err && decod.user && isPrimitiveNumber(decod.user.id)){
            idUser = decod.user.id;
          }
        })
      );
    })
      .then(()=>{
        if(idUser){
          const rawSql = `select id, username, permissions, first_name, last_name from users where id = ${idUser};`;
          return knex.raw(rawSql)
            .then(found => {
              const userFound = validateRawKnex(found, rawSql,makeCamel,{returnFirst: true, returnInvalid: {}});
              if(!userFound.id){
                throw {message: 'user not found'};
              }
              const userForToken = {
                id:          userFound.id,
                username:    userFound.username,
                permissions: userFound.permissions,
              };
              const newAuthToken = createAuthToken(userForToken);
              const userForResponse = {
                id:          userFound.id,
                username:    userFound.username,
                firstName:   userFound.firstName,
                lastName:    userFound.lastName,
                authToken:   newAuthToken,
                permissions: userFound.permissions,
              };
              return userForResponse;
            })
            .then(user => {
              return res.status(200).json(user);
            })
            .catch(err => {
              respondToError(err, res);
            });
        }
        return res.status(400).json({message: 'invalid request'});
      });
  }
  logger.info('user has no token');
  return res.status(400).json({message: 'missing auth token, cannot reauthenticate; please log in with username and password'});
});

module.exports = {
  router, 
  getTokenFromReq,
  readUserFromReq,
  jwtStrategy, 
  hashPassword,
  createAuthToken,
  userIsAdmin,
  getUserPermissions,
};