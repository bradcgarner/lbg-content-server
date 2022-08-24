'use strict';
// endpoint is /api/site-content/
const express                = require('express');
const router                 = express.Router();
const { 
  validateRawKnex,
  precisionRound }           = require('conjunction-junction');
const { respondToError   }   = require('../comm/responses');
const logger                 = require('log123').createLogger('./routers/site-content.log');
const { 
  handleAttemptedHack }      = require('../comm/notifications');
const { 
  getIpAddr,
  hasSql }                   = require('../helpers/_security');
const { Content }            = require('../models/content');
const knex                   = require('../db-sql');
const { 
  createUpdateSimpleTableArrSql
}                            = require('../config-db/db-custom');

router.use(express.json());

// @@@@@@@@@@@@@@ END HELPERS, START ENDPOINTS @@@@@@@@@@@@

router.get('/image-data', (req, res)=> {
  const ip = getIpAddr(req);
  const foundHack = hasSql(req.body)||hasSql(req.params)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('GET/api/site-content/image-data',req,res,ip,foundHack);
  }

  const tags = typeof req.query.tags === 'string' ?
    req.query.tags.split(',').map(t=>t.trim()) : [];
  const ratio = typeof req.query.ratio === 'string' && req.query.ratio !== 'null' && req.query.ratio !== 'undefined'?
    parseFloat(req.query.ratio) : null;
  const operator = req.query.operator === 'or' ? 'or' : 'and';

  const where1 = ratio ? `(ratio >= ${precisionRound(ratio - 0.05,4)} and ratio <= ${precisionRound(ratio + 0.05,4)})` : null ;
  const where2 = tags.length > 0 && tags[0] ?
    `${tags.map(t=>`'${t}'=any(tags)`).join(` ${operator} `)}` : null ;
  const where = 
    where1 && where2 ? 
      `where ${where1} and (${where2})` :
      where1 ?
        `where ${where1}` :
        where2 ?
          `where ${where2}` :
          '' ;
  const getDataSql = `select * from butter_images ${where} order by image_path_related asc, ratio desc;`;
  return knex.raw(getDataSql)
    .then(found=>{
      const makeCamel = true;
      const data = validateRawKnex(found, getDataSql, makeCamel, {returnInvalid: []});
      data.forEach(d=>{
        if(Array.isArray(d.tags)){
          const tags = {};
          d.tags.forEach(t=>tags[t] = true);
          d.tags = tags;
        } else {
          d.tags = {};
        }        
      });
      return res.status(200).json(data);
    })
    .catch(err => {
      respondToError(err, res);
    });
});

router.get('/', (req, res) => {
  const ip = getIpAddr(req);
  const foundHack = hasSql(req.params)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('GET/api/site-content',req,res,ip,foundHack);
  }

  const {level2, level3, site, meta} = req.query;
  const includeGeneral = req.query.general === 'false' ? false : true;
  return new Promise(resolve=>{
    resolve();
  })
    .then(()=>{
      // if no level 2, send everything
      if(!level2){
        const content = {};
        return new Promise(resolve=>{
          resolve();
        })
          .then(()=>{
            return Content.find({})
              .then(found=>{
                return found;
              })
              .then(found=>{
                found.forEach(doc=>{
                  const l2 = doc.level2;
                  if(meta){
                    if(doc.content && doc.content.meta){
                      content[l2] = doc.content.meta;
                    }
                  } else {
                    content[l2] = doc.content;
                  }
                });
                return res.status(200).json(content);
              });
          })
          .catch(err=>{
            respondToError(err, res);
          });
	    }
      // there is level 2
      let general = {};
      let level2Data = {};
      const metas = {};
      return Content.findOne({level2: 'general', site})
        .then(found=>{
          general = found.content;
          return;
        })
        .then(()=>{
          return Content.findOne({level2: level2, site})
            .then(found=>{
              level2Data = found.content;
            });
        })
        .then(()=>{
          if(meta){
            return Content.find({site})
              .then(found=>{
                return found;
              })
              .then(found=>{
                found.forEach(doc=>{
                  const l2 = doc.level2;
                  if(doc.content && doc.content.meta){
                    metas[l2] = doc.content.meta;
                  }
                });
              });
          }
          return;
        })
        .then(()=>{
          const level3Data = level2Data[level3] || {};
          const result = level3 && includeGeneral ?
            {[level3]:level3Data,general} :
            level3 ?
              level3Data :
              includeGeneral ? 
                {[level2]:level2Data,general} :
                level2Data;
          if(meta){
            result.metas = metas;
          }
          logger.info(result)
          return res.status(200).json(result);
        });
    })
    .catch(err => {
      respondToError(err, res);
    });
});

router.put('/image-data', (req, res)=> {
  const ip = getIpAddr(req);
  const foundHack = hasSql(req.body)||hasSql(req.params)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('PUT/api/site-content/image-data',req,res,ip,foundHack);
  }

  const images = Array.isArray(req.body) ? req.body : [];
  images.forEach(i=>{
    const tags = i.tags ?
      Object.keys(i.tags).filter(t=>i.tags[t]) : [];
    i.tags = tags;
  });
  const putImagesSql  = createUpdateSimpleTableArrSql('butter_images',images);
  return knex.raw(putImagesSql)
    .then(()=>{
      return;
    })
    .then(()=>{
      return res.sendStatus(204);
    })
    .catch(err => {
      respondToError(err, res);
    });
});

router.put('/', (req, res)=> {

  const {level2, level2Key, level3, site} = req.query;

  // USE OPTION BELOW IN DEV TO TEMPORARILY ADD KEYS
  // console.log('contentToUpdate.content',contentToUpdate.content)
  // for(let l2 in contentToUpdate.content){
  //   // console.log('l2',l2)
  //   if(Array.isArray(contentToUpdate.content[l2].trioBanner)){
  //     contentToUpdate.content[l2].trioBanner.forEach(g=>{
  //       console.log('g',g);
  //       g.desc = 'description to display on hover';
          
  //     });
  //   }
  // }
  // throw {x:1};
  // for(let l2 in contentToUpdate.content){
  //   if(Array.isArray(contentToUpdate.content[l2].photoLibrary)){
  //     contentToUpdate.content[l2].photoLibrary.forEach(g=>{
  //       g.active = false;
  //       if(Array.isArray(g.images)){
  //         g.images.forEach(i=>i.active = false);
  //       }
  //     });
  //   }
  //   if(Array.isArray(contentToUpdate.content[l2].videos)){
  //     contentToUpdate.content[l2].videos.forEach(g=>{
  //       g.active = false;
  //     });
  //   }
  //   if(Array.isArray(contentToUpdate.content[l2].downloads)){
  //     contentToUpdate.content[l2].downloads.forEach(g=>{
  //       g.active = false;
  //     });
  //   }
  // }

  if(level2){
    const contentToUpdate = {content: req.body, level2, site};
    return Content.updateOne({level2},contentToUpdate)
      .then(c=>{
        return res.status(200).json(c.content);
      })
      .catch(err => {
        respondToError(err, res);
      });
  }
  if(level2Key && level3){
    return Content.findOne({level2: level2Key, site})
      .then(found=>{
        return found;
      })
      .then(contentToUpdate=>{
        contentToUpdate.content[level3] = req.body;
        return Content.updateOne({level2: level2Key},contentToUpdate)
          .then(()=>{
            return;
          })
          .then(()=>{
            return res.status(200).json(contentToUpdate.content[level3]);
          });
      })
      .catch(err => {
        respondToError(err, res);
      });
  }
  return res.status(500).json({message: 'Internal Server Error'});
});

module.exports = {
  router,
};