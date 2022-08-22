'use strict';

const { keysCompileFile } = require('../config');
const fs                  = require('fs');
const { titleCaseWord,
  prefixCommonKeys    }   = require('conjunction-junction');
const logger              = require('log123').createLogger(keysCompileFile); 
const knex                = require('../db-sql');
const { commonSc }        = require('./static');

const compileKeys = () => {
  const timestampInitiated = new Date(); // tz embedded
  console.log(`*** starting keys-compile at ${timestampInitiated} ***`);

  let obj_camel = {}, obj_snake = {};
  // **********************
  return knex.raw('select * from keys')
    .then(raw=>{
      raw.rows.forEach(k=>{
        // compact by stripping out all falsey fields 
        const compacted = {};
        for(let field in k){
          if(k[field]){
            compacted[field] = k[field];
          }
        }
        // populate the object of all keys
        if(!obj_snake[k.snake]){
          obj_snake[k.snake] = compacted;
        }
        if(!obj_camel[k.camel]){
          obj_camel[k.camel] = compacted;
        }
      });
    })
    .then(()=>{

      // create table object 
      // snake and camel have the same info, so just use one
      // first step gets as far as creating empty objects,
      // and listing keys in both cases
      const tables    = {};

      for(let k in obj_snake){
        const theK = obj_snake[k];
        // TABLES
        if(Array.isArray(theK.tables)){
          theK.tables.forEach(t=>{
            // list all tables
            if(!tables[t]){
              tables[t] = {
                snakes_obj: {},
                camels_obj: {},
              };
            }
            tables[t].snakes_obj[k] = true;
            tables[t].camels_obj[theK.camel] = true;
          });
        } else {
          logger.info('no tables for',k);
        }
      }

      // now that tables are created, add to them
      // full and filtered arrays of keys
      for(let t in tables){
        const theT = tables[t];
        // start by converting the objects of keys to arrays
        const _snakes = [];
        const _camels = [];
        for(let k in theT.camels_obj){
          _camels.push(k);
        }
        for(let k in theT.snakes_obj){
          _snakes.push(k);
        }
        const snakes = _snakes.sort();
        const camels = _camels.sort();
        theT.snakes = snakes;
        theT.camels = camels;
        
        // next filter the newly created arrays
        theT.list_fetch_snakes = snakes.filter(k=>{
          return obj_snake[k].list_fetch;
        });
        theT.post_snakes = snakes.filter(k=>{
          return obj_snake[k].post;
        });
        theT.post_camels = camels.filter(k=>{
          return obj_camel[k].post;
        });

        theT.post_req_snakes = snakes.filter(k=>{
          return obj_snake[k].post_req;
        });
        theT.post_req_camels = camels.filter(k=>{
          return obj_camel[k].post_req;
        });

        theT.put_snakes = snakes.filter(k=>{
          return obj_snake[k].put;
        });
        theT.put_camels = camels.filter(k=>{
          return obj_camel[k].put;
        });

        theT.subtable_snakes = snakes.filter(k=>{
          return obj_snake[k].subtable;
        });
        theT.subtable_camels = camels.filter(k=>{
          return obj_camel[k].subtable;
        });

        /* Prefixed keys: create an object to be used as a constant to be used in SQL join statements.
         * INPUT: list of keys from global space
         * OUTPUT: object with 3 keys per table
         * key that lists all keys in snake_case
         * key that lists all keys in snake_case with table name prefixes for common subtable keys (assuming this is a parent table)
         * key that lists all keys in snake_case with table name prefixes for common keys (assuming this is a subtable)
         */
        const optionsParent = {parent: true , alwaysPrefix: false, case: 'Sc'};
        const optionsSub    = {parent: false, alwaysPrefix: false, case: 'Sc'};
        
        theT.snakes_prefixed     = prefixCommonKeys(t, snakes ,commonSc, optionsParent);
        theT.snakes_prefixed_sub = prefixCommonKeys(t, snakes ,commonSc, optionsSub   );
      }

      const objectSnakeString  = JSON.stringify(obj_snake, null, 2);
      const objectCamelString  = JSON.stringify(obj_camel, null, 2);
      const tablesString       = JSON.stringify(tables   , null, 2);

      // create legend objects
      // these are outside of tables
      const abbrevs_snake   = {};
      const labels_snake    = {};
      const defs_snake      = {};
      const units_snake     = {};
      const styles_snake    = {};

      for(let k in obj_snake){
        const theK = obj_snake[k];

        if(theK.abbrevs && !abbrevs_snake[k]){
          abbrevs_snake[k] = theK.abbrevs;
        }

        if(theK.labels && !labels_snake[k]){
          labels_snake[k] = theK.labels;
        }
        
        if(theK.defs && !defs_snake[k]){
          defs_snake[k] = theK.defs;
        }
        
        if(theK.units && !units_snake[k]){
          units_snake[k] = theK.units;
        }
        
        if((theK.colors || theK.styles) && !styles_snake[k]){
          styles_snake[k] = {
            color: theK.colors,
            style: theK.styles ? JSON.parse(theK.styles) : null,
          };
        }
      }
      
      const abbrevs_camel   = {};
      const labels_camel    = {};
      const defs_camel      = {};
      const styles_camel    = {};
      const units_camel     = {};

      for(let k in obj_camel){
        const theK = obj_camel[k];

        if(theK.abbrevs && !abbrevs_camel[k]){
          abbrevs_camel[k] = theK.abbrevs;
        }
        
        if(theK.labels && !labels_camel[k]){
          labels_camel[k] = theK.labels;
        }

        if(theK.defs && !defs_camel[k]){
          defs_camel[k] = theK.defs;
        }
        
        if(theK.units && !units_camel[k]){
          units_camel[k] = theK.units;
        }

        if((theK.colors || theK.styles) && !styles_camel[k]){
          styles_camel[k] = {
            color: theK.colors,
            style: theK.styles ? JSON.parse(theK.styles) : null,
          };
        }
      }

      const abbrevs_prefix   = {};
      const labels_prefix    = {};
      const defs_prefix      = {};

      for(let k in obj_camel){
        const theK = obj_camel[k];

        if(Array.isArray(theK.tables)){
          theK.tables.forEach(table=>{

            if(table !== 'null'){
              const prefixed = `${table}${titleCaseWord(k)}`;

              if(theK.abbrevs && !abbrevs_prefix[k]){
                abbrevs_prefix[prefixed] = theK.abbrevs;
              }
              
              if(theK.labels && !labels_prefix[k]){
                labels_prefix[prefixed] = theK.labels;
              }
      
              if(theK.defs && !defs_prefix[k]){
                defs_prefix[prefixed] = theK.defs;
              }
            }

          });
        }
        
      }

      const terminologyCcFields = [];
      const faqCcFields = [];

      for(let t in tables.terminology.camels_obj){
        terminologyCcFields.push({
          key: t,
          def: obj_camel[t].defs,
          sortOrder: obj_camel[t].sort_order,
          required: t==='termDef' || obj_camel[t].post_req,
        });
      }

      for(let f in tables.faq.camels_obj){
        if(f!=='faqSortOrder'){
          faqCcFields.push({
            key: f,
            def: obj_camel[f].defs,
            sortOrder: obj_camel[f].sort_order,
            required: f==='answer_basic' || obj_camel[f].post_req,
          });
        }
      }

      terminologyCcFields.sort((a,b)=>{
        if(a.sortOrder>b.sortOrder){
          return 1;
        } else if(a.sortOrder<b.sortOrder){
          return -1;
        }
        return 0;
      });

      faqCcFields.sort((a,b)=>{
        if(a.sortOrder>b.sortOrder){
          return 1;
        } else if(a.sortOrder<b.sortOrder){
          return -1;
        }
        return 0;
      });

      const abbrevsSnakeString  = JSON.stringify(abbrevs_snake , null, 2);
      const abbrevsCamelString  = JSON.stringify(abbrevs_camel , null, 2);
      const abbrevsPrefixString = JSON.stringify(abbrevs_prefix, null, 2);
      
      const labelsSnakeString   = JSON.stringify(labels_snake  , null, 2);
      const labelsCamelString   = JSON.stringify(labels_camel  , null, 2);
      const labelsPrefixString  = JSON.stringify(labels_prefix , null, 2);

      const defsSnakeString     = JSON.stringify(defs_snake    , null, 2);
      const defsCamelString     = JSON.stringify(defs_camel    , null, 2);
      const defsPrefixString    = JSON.stringify(defs_prefix   , null, 2);

      const unitsSnakeString    = JSON.stringify(units_snake   , null, 2);
      const unitsCamelString    = JSON.stringify(units_camel   , null, 2);
      
      const stylesSnakeString   = JSON.stringify(styles_snake  , null, 2);
      const stylesCamelString   = JSON.stringify(styles_camel  , null, 2);
      
      const terminologyCcFieldsString = JSON.stringify(terminologyCcFields, null, 2);
      const faqCcFieldsString         = JSON.stringify(faqCcFields, null, 2);
      // DONE !!
      const contents = `'use strict';
      
const obj_snake = ${objectSnakeString};
const obj_camel = ${objectCamelString};
const tables = ${tablesString};

const abbrevs_snake = ${abbrevsSnakeString};
const abbrevs_camel = ${abbrevsCamelString};
const abbrevs_prefix = ${abbrevsPrefixString};

const labels_snake = ${labelsSnakeString};
const labels_camel = ${labelsCamelString};
const labels_prefix = ${labelsPrefixString};

const defs_snake = ${defsSnakeString};
const defs_camel = ${defsCamelString};
const defs_prefix = ${defsPrefixString};

const units_snake = ${unitsSnakeString};
const units_camel = ${unitsCamelString};

const styles_snake = ${stylesSnakeString};
const styles_camel = ${stylesCamelString};

const terminology_cc_fields = ${terminologyCcFieldsString};
const faq_cc_fields = ${faqCcFieldsString};

module.exports = { 
  obj_snake,
  obj_camel,
  tables, 

  abbrevs_snake,
  abbrevs_camel, 
  abbrevs_prefix, 

  labels_snake, 
  labels_camel,
  labels_prefix,
  
  defs_snake, 
  defs_camel,
  defs_prefix,

  units_snake, 
  units_camel,

  styles_snake,
  styles_camel,

  terminology_cc_fields,
  faq_cc_fields,
}`;
      
      return fs.writeFile('./keys/keys.js', contents, function (err) {
        if (err) throw err;
        console.log('Success! We just updated keys.js');
      });
    })
    .catch(err=>{
      console.error(err);
    });
  
};

module.exports = {
  compileKeys,
};