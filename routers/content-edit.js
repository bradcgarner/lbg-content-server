'use strict';
// endpoint is /api/content-edit/
const express             = require('express');
const router              = express.Router();
const { 
  convertObjectKeyCase,
  formatObjectForKnex,
  validateRawKnex }       = require('conjunction-junction');
const knex                = require('../db-sql');
const { hasSql }          = require('../helpers/_security');
const { 
  contentFile,    }       = require('../config');
const logger              = require('log123').createLogger(contentFile);
const { 
  handleAttemptedHack }   = require('../comm/hack');
const { respondToError  } = require('../comm/responses');
const { tables }          = require('../config-db/keys');
const { jwtStrategy   }   = require('./auth');
router.use(express.json());

const userContainer = {};
router.use((req, res, next)=>jwtStrategy(req, res, next, userContainer));
// @@@@@@@@@@@@@@ END IMPORTS  @@@@@@@@@@@@

const terminology = tables.terminology || {};
const faq = tables.faq || {};

const terminologyPutSnakes = terminology.put_snakes;
const faqPutSnakes = faq.put_snakes;

const createFaqPutPostSql = f => {
  if(!f){
    return '';
  }
  const fSnake = convertObjectKeyCase(f,'snake');
  const fForSql = formatObjectForKnex(fSnake,{type:'raw'});
  const fields = faqPutSnakes;
  const values = fields.map(f=>{
    return fForSql[f] || 'null';
  });
  if(f.id){
    return `update faq set (${fields.join(', ')}) = (
			${values.join(', ')}
		) where id = ${f.id};`;
  }
  return `insert into faq (${fields.join(', ')}) values (
		${values.join(', ')}
	) returning id;`;
};

const createTermPutPostSql = t => {
  if(!t){
    return '';
  }
  const tSnake = convertObjectKeyCase(t,'snake');
  const fForSql = formatObjectForKnex(tSnake,{type:'raw'});
  const fields = terminologyPutSnakes;
  const values = fields.map(t=>{
    return fForSql[t] || 'null';
  });
  if(t.id){
    return `update terminology set (${fields.join(', ')}) = (
			${values.join(', ')}
		) where id = ${t.id};`;
  }
  return `insert into terminology (${fields.join(', ')}) values (
		${values.join(', ')}
	) returning id;`;
};

// @@@@@@@@@@@@@@ END HELPERS, START ENDPOINTS @@@@@@@@@@@@

router.get('/faq', (req, res)=>{
  const foundHack = hasSql(req.params)||hasSql(req.query)||hasSql(req.body);
  if(foundHack){
    return handleAttemptedHack('GET/api/content-edit/faq',req,res,foundHack,userContainer);
  }
  const findFaqsSql = 'select * from faq order by faq_sort_order;';
  return knex.raw(findFaqsSql)
    .then(found=>{
      const results = validateRawKnex(found, findFaqsSql);
      if(!Array.isArray(results)) {
        throw {
          message: 'Error finding faq',
        };
      }
      return results.map(r=>convertObjectKeyCase(r, 'cC'));
    })
    .then(results=>{
      return res.status(200).json(results);
    })
    .catch(err=>{
      respondToError(err, res);
    });
});

router.get('/terminology', (req, res)=>{
  const foundHack = hasSql(req.params)||hasSql(req.query)||hasSql(req.body);
  if(foundHack){
    return handleAttemptedHack('GET/api/content-edit/faq',req,res,foundHack,userContainer);
  }
  const findTermsSql = 'select * from terminology order by term_name;';
  return knex.raw(findTermsSql)
    .then(found=>{
      const results = validateRawKnex(found, findTermsSql);
      if(!Array.isArray(results)) {
        throw {
          message: 'Error finging terminology',
        };
      }
      return results.map(r=>convertObjectKeyCase(r, 'cC'));
    })
    .then(results=>{
      return res.status(200).json(results);
    })
    .catch(err=>{
      respondToError(err, res);
    });
});


router.put('/faq', (req, res) => {
  const foundHack = hasSql(req.params)||hasSql(req.query)||hasSql(req.body);
  if(foundHack){
    return handleAttemptedHack('PUT/api/content-edit/faq',req,res,foundHack,userContainer);
  }
	
  const existingId = req.body.id;
  let newId;
	
  const actualUser = userContainer.contents.user;

  const body = Object.assign({},req.body,{
    idUserEdit: actualUser.id,
	  timestampModified: new Date(),
  });
	
  const allowPublish = Array.isArray(actualUser.permissions) &&
	actualUser.permissions.includes('contentPublish');

  if(!allowPublish){
    delete body.published;
  }

  const rawSql = createFaqPutPostSql(body);
  return knex.raw(rawSql)
    .then(found=>{
      if(!existingId){
        newId = found.rows[0].id;
      }
    })
    .then(()=>{
      const idToUse = existingId || newId;
      const findFaqSql = `select * from faq where id = ${idToUse};`;
      return knex.raw(findFaqSql)
			  .then(found=>{
          const results = validateRawKnex(found, findFaqSql);
          if(!Array.isArray(results)) {
            throw {
              message: `FAQ id# ${idToUse} not found`,
            };
          }
          return res.status(200).json(results[0]);
        });
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.put('/terminology', (req, res) => {
  const foundHack = hasSql(req.params)||hasSql(req.query)||hasSql(req.body);
  if(foundHack){
    return handleAttemptedHack('PUT/api/content-edit/terminology',req,res,foundHack,userContainer);
  }
  const actualUser = userContainer.contents.user;

  const existingId = req.body.id;
  let newId;

  const body = Object.assign({},req.body,{
    idUserEdit: actualUser.id,
    timestampModified: new Date(),
  });
	
  const allowPublish = Array.isArray(actualUser.permissions) &&
	actualUser.permissions.includes('contentPublish');

  if(!allowPublish){
    delete body.published;
  }
	
  const rawSql = createTermPutPostSql(body);

  return knex.raw(rawSql)
    .then(found=>{
      if(!existingId){
        newId = found.rows[0].id;
      }
    })
    .then(()=>{
      const idToUse = existingId || newId;
      const findTermSql = `select * from terminology where id = ${idToUse};`;
      return knex.raw(findTermSql)
			  .then(found=>{
          const results = validateRawKnex(found, findTermSql);
          if(!Array.isArray(results)) {
            throw {
              message: `Terminology id# ${idToUse} not found`,
            };
          }
          const camelItem = convertObjectKeyCase(results[0], 'cC');
          return res.status(200).json(camelItem);
        });
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

module.exports = { 
  router,
};