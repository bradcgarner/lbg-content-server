'use strict';

const { 
  convertScToCc,
  inchesToMmRound }       = require('conjunction-junction');
const { keysCompileFile } = require('../config');
const fs                  = require('fs');
const logger              = require('log123').createLogger(keysCompileFile,'no-header'); 
const knex                = require('../db-sql');

const createDummies = false; // create dummy products
// see notes below where used

const formatProduct = r => {
  const thisProduct = {};
  for(let k in r){
    if(k === 'id'){
      thisProduct.idProduct = r[k];
    } else if(k==='def_in'){
      thisProduct.in = r[k];
    } else if(k==='def_mm'){
      thisProduct.mm = r[k];
    } else if(k==='steps'){
      thisProduct.stepsArr = r[k];
      if(Array.isArray(r[k]) && Array.isArray(r[k][0])){
        const mmArr = Array.isArray(r[k][1]) ? r[k][1] : [];
        thisProduct.steps = r[k][0].map((s,i)=>{
          const mm = typeof mmArr[i] !== 'undefined' ? mmArr[i] : inchesToMmRound(s);
          return {in: s, mm};
        });
      }
    } else if(r[k] && 
      k !== 'timestamp_created' &&
      k !== 'product_thickness_in' &&
      k !== 'product_thickness_mm' &&
      k !== 'product_thickness_gi' ){
      thisProduct[convertScToCc(k)] = r[k];
    } 
  }
  if(r.has_thickness){
    thisProduct.in = r.product_thickness_in,
    thisProduct.mm = r.product_thickness_mm;
    thisProduct.gi = r.product_thickness_gi;
  }
  return thisProduct;
};

const formatFaq = d => {
  return {
    id: d.id,
    question:    d.question,
    sortOrder:   d.faq_sort_order,
    answer: {
      answerBasic:     d.answer_basic,
      answerLiveOnly:  d.answer_live_only,
      answerA1:        d.answer_a1,
      answerHref:      d.answer_href,
      answerHrefText:  d.answer_href_text,
      answerA2:        d.answer_a2,
      answerSrc:       d.answer_src,
      answerAlt:       d.answer_alt,
    },
  };
};

const formatTerm = d => {
  return {
    id:            d.id,
    termName:      d.term_name,
    termDef:       d.term_def,
    termLiveOnly:  d.term_live_only,
    termA1:        d.term_a1,
    termHref:      d.term_href,
    termHrefText:  d.term_href_text,
    termA2:        d.term_a2,
    termSet:       d.term_set,
    termPath:      d.term_path,
    termSameAs:    d.term_same_as,
    termSrc:       d.term_src,
    termAlt:       d.term_alt,
  };
};

const compileData = () => {
  const timestampInitiated = new Date(); // tz embedded
  console.log(`*** starting products-compile at ${timestampInitiated} ***`);

  const systemsObject = {};
  const products    = {};
  const allPaths    = {};
  const versions    = [];
  const reviewers   = [];
  let publicSystemsObject;
  let minimalSystemsObject = {};
  let partnersObject = {};
  let faq, terminology;

  // **********************
  return knex.raw('select * from systems;')
    .then(raw=>{
      raw.rows.forEach(r=>{
        const thisSystem = {};
        for(let k in r){
          if(k === 'id'){
            thisSystem.idSystem = r[k];
          } else {
            thisSystem[convertScToCc(k)] = r[k];
          }
        }
        systemsObject[`${r.id}`] = thisSystem;
        logger.info('SYSTEM',systemsObject[`${r.id}`]);
      });
    })
    .then(()=>{
      return knex.raw('select * from products;')
        .then(raw=>{
          raw.rows.forEach(p=>{
            if(systemsObject[`${p.id_system}`]){

              if(!systemsObject[`${p.id_system}`][p.lyr]){
                systemsObject[`${p.id_system}`][p.lyr] = {def: null, productOptions:[]};
              }
              const thisProduct = formatProduct(p);
              products[`${thisProduct.idProduct}`] = thisProduct;
  
              if(p.def_choice && !systemsObject[`${p.id_system}`][p.lyr].def){
                systemsObject[`${p.id_system}`][p.lyr].def = thisProduct;
              } else {
                // don't add def to options here; get to the end, then unshift
                systemsObject[`${p.id_system}`][p.lyr].productOptions.push(thisProduct);
              }
            }
          });
          return;
        });
    })
    .then(()=>{
      return knex.raw('select * from faq where published = 1 order by faq_sort_order;')
        .then(raw=>{
          faq = raw.rows.map(r=>formatFaq(r));
          return;
        });
    })
    .then(()=>{
      return knex.raw('select * from terminology where published = 1 order by term_name;')
        .then(raw=>{
          terminology = raw.rows.map(r=>formatTerm(r));
          return;
        });
    })
    .then(()=>{
      for(let idSystem in systemsObject){
        for(let lyr in systemsObject[idSystem]){
          if(lyr.length === 2){
            if(systemsObject[idSystem][lyr].def){
              if(Array.isArray(systemsObject[idSystem][lyr].productOptions)){
                systemsObject[idSystem][lyr].productOptions.unshift(systemsObject[idSystem][lyr].def);
              }
            }
            delete systemsObject[idSystem][lyr].def;
          }
        }
      }
    })
    .then(()=>{
      // @@@@@@@@@@@@@ START CREATE DUMMIES @@@@@@@@@
      if(!createDummies){
        return;
      }
      // 5 = generic PR, which should be the most complete
      // if an option does not exist for a partner,
      // i.e. the partner does not have a "custom" option,
      // backfill the partner with a unique copy of the generic
      // this is unique because it has its own ID
      // the partner's system id is also copied, for full compatibility
      // when selecting products (products must be part of a system)
      // NOTE: THESE DUMMY IDS WILL NOT SAVE!
      // THEY WILL VIOLATE FOREIGN KEY CONSTRAINTS
      // BUT THE DUMMY IDS WILL LET US KNOW IF WE ARE MISSING ANY PRODUCTS
      if(systemsObject['5']){
        const prObj = systemsObject['5'];
        for(let lyr in prObj){
          for(let idSystem in systemsObject){
            const partnerObj = systemsObject[idSystem];
            if(idSystem !== '5'){
              if(!partnerObj[lyr]){
                partnerObj[lyr] = JSON.parse(JSON.stringify(prObj[lyr]));
                if(partnerObj[lyr].def){
                  partnerObj[lyr].def.idSystem = parseInt(idSystem);
                  partnerObj[lyr].def.idProduct = partnerObj[lyr].def.idProduct + (partnerObj[lyr].def.idSystem*10000);
                  const thisProduct = formatProduct(partnerObj[lyr].def);
                  products[thisProduct.idProduct] = thisProduct;
                }
                if(Array.isArray(partnerObj[lyr].productOptions)){
                  partnerObj[lyr].productOptions.forEach(item=>{
                    item.idSystem = parseInt(idSystem);
                    item.idProduct = item.idProduct + (partnerObj[lyr].def.idSystem*10000);
                    const thisProduct = formatProduct(item);
                    products[thisProduct.idProduct] = thisProduct;
                  });
                }
              }
            }
          }
        }
      }
      // @@@@@@@@ END CREATE DUMMIES @@@@@@@@@
    })
    .then(()=>{
      if(!createDummies){
        return;
      }
      let count = 0;
      for(let _id in products){
        const id = parseInt(_id);
        if(id > 1000){
          count++;
          const originalId = 
            id >=60000 ? id-60000 :
              id >=50000 ? id-50000 :
                id >=40000 ? id-40000 :
                  id >=30000 ? id-30000 :
                    id >=20000 ? id-20000 :
                      id >=10000 ? id-10000 :
                        0;
          const sql = `insert into products (
name_product,
id_system,

type_product,
lyr,
has_thickness,
product_thickness_in,
product_thickness_mm,
product_thickness_gi,
def_choice,
def_mm,
def_in,
dry_kg_m3,
f18_kg_m3,
fc_kg_m3,
sat_kg_m3,
dry_kg_m2,
f18_kg_m2,
fc_kg_m2,
sat_kg_m2,
data_source,
data_url,
legend_in,
legend_mm,
legend_url,
legend_url_text,
label_symbol,
use_product,
steps,
notes ) select 

'${products[_id].name} ${products[id].idSystem}',
${products[id].idSystem},

type_product,
lyr,
has_thickness,
product_thickness_in,
product_thickness_mm,
product_thickness_gi,
def_choice,
def_mm,
def_in,
dry_kg_m3,
f18_kg_m3,
fc_kg_m3,
sat_kg_m3,
dry_kg_m2,
f18_kg_m2,
fc_kg_m2,
sat_kg_m2,
data_source,
data_url,
legend_in,
legend_mm,
legend_url,
legend_url_text,
label_symbol,
use_product,
steps,
notes from products where id = ${originalId}; `;
          logger.info(sql);
        }
      }
      if(count > 0){
        console.error(`CHECK COMPILE-PRODUCTS.LOG. YOU NEED TO CREATE ${count} NEW PRODUCT RECORDS!!!!`);
      }
      // @@@@@@@ END CREATE DUMMIES PART 2 @@@@@
    })
    .then(()=>{
      const po = JSON.parse(JSON.stringify(systemsObject));

      const partnerKeysToDelete = [
        'timestampCreated',
        'contactCc',
        'contactCcEmails',
        // 'detailsInclude',
        // 'modelInclude',
        // 'detailsReady',
        'contactCc',
        'hydrologyInclude',
        'mapInclude',
      ];
      const productKeysToDelete = [
        'hasThickness',
        'defChoice',
        'dataSource',
        'dataUrl',
        'stepsArr',
        'notes',
      ];
      for(let idSystem in po){
        partnerKeysToDelete.forEach(k=>{
          delete po[idSystem][k];
        });
        for(let lyr in po[idSystem]){
          if(lyr.length === 2){
            if(po[idSystem][lyr].def){
              if(Array.isArray(po[idSystem][lyr].productOptions)){
                po[idSystem][lyr].productOptions.unshift(po[idSystem][lyr].def);
              }
              delete po[idSystem][lyr].def;
            }
            if(Array.isArray(po[idSystem][lyr].productOptions)){
              po[idSystem][lyr].productOptions.forEach(product=>{
                productKeysToDelete.forEach(k=>{
                  delete product[k];
                });
              });
            }
          }
        }
      }
      publicSystemsObject = po;

      partnersObject = JSON.parse(JSON.stringify(systemsObject));
      for(let idPartner in partnersObject){
        for(let k in partnersObject[idPartner]){
          if(k.length ===2 || k==='contactCcEmails' || k==='timestampCreated'){
            delete partnersObject[idPartner][k];
          }
        }
      }
    })
    .then(()=>{
      if(publicSystemsObject['5']){
        const minimal = JSON.parse(JSON.stringify(publicSystemsObject['5']));
        const lyrsToKeep = {
          // 1 = keep only 1 option
          // 2 = keep all options
          vg:1,so:1,mw:1,ff:2,pt:2,mb:1,sr:1,pw:1,wp:1,gv:1,hc:1,pv:1,pd:1,xp:1,dr:2,
        };
        for(let k in minimal){
          if(k.length === 2){ // if is a lyr
            if(!lyrsToKeep[k]){ // if deleting (not minimal)
              delete minimal[k];
            } else if(lyrsToKeep[k] === 1 && 
              Array.isArray(minimal[k].productOptions) && 
              minimal[k].productOptions.length > 1){
              minimal[k].productOptions = minimal[k].productOptions.slice(0,1);
            }
          }
        }
        minimalSystemsObject = {'5': minimal};
      }
    })
    .then(()=>{
      const findPathsSql = 'select id, project_path from projects;';
      return knex.raw(findPathsSql)
        .then(raw=>{
          raw.rows.forEach(r=>{
            allPaths[r.project_path] = true;
          });
        });
    })
    .then(()=>{
      const findVersionsSql = 'select * from versions;';
      return knex.raw(findVersionsSql)
        .then(raw=>{
          raw.rows.forEach(r=>{
            versions.push({
              id:   r.id,
              name: r.name_version,
              desc: r.desc_version,
            });
          });
        });
    })
    .then(()=>{
      const permission = 'review';
      const findReviewersSql = `select * from users where '${permission}'=any(permissions) order by last_name;`;
      return knex.raw(findReviewersSql)
        .then(raw=>{
          raw.rows.forEach(r=>{
            reviewers.push({
              fullName: `${r.first_name} ${r.last_name}`,
              email:    r.email,
              title:    r.title,
              phone:    r.phone,
            });
          });
        });
    })
    .then(()=>{
    
      const contents = `'use strict';
      
const partnersObject = ${JSON.stringify(partnersObject,null,2)};

const systemsObject = ${JSON.stringify(systemsObject,null,2)};

const publicSystemsObject = ${JSON.stringify(publicSystemsObject, null,2)};

const minimalSystemsObject = ${JSON.stringify(minimalSystemsObject, null,2)};

const products = ${JSON.stringify(products,null,2)};

const allPaths = ${JSON.stringify(allPaths,null,2)};

const versions = ${JSON.stringify(versions,null,2)};

const reviewers = ${JSON.stringify(reviewers,null,2)};

const faq = ${JSON.stringify(faq, null, 2)};

const terminology = ${JSON.stringify(terminology, null, 2)};

module.exports = { 
  partnersObject,
  systemsObject,
  publicSystemsObject,
  minimalSystemsObject,
  products, 
  allPaths,
  versions,
  reviewers,
  faq,
  terminology,
};`;
      
      return fs.writeFile('./config-db/data.js', contents, function (err) {
        if (err) throw err;
        console.log('Success! We just updated data.js');
      });
    })
    .catch(err=>{
      console.error(err);
    });
};

module.exports = {
  compileData,
};