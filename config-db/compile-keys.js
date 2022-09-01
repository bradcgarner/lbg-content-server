'use strict';

const { keysCompileFile } = require('../config');
const fs                  = require('fs');
const { 
  convertScToCc,
  titleCaseWord,
  prefixCommonKeys    }   = require('conjunction-junction');
const logger              = require('log123').createLogger(keysCompileFile); 
const knex                = require('../db-sql');
const { commonSc }        = require('./static');

const compileKeys = () => {
  const timestampInitiated = new Date(); // tz embedded
  // eslint-disable-next-line no-console
  console.log(`*** starting keys-compile at ${timestampInitiated} ***`);

  let hashCamel = {}, hash_snake = {};
  // **********************
  return knex.raw('select * from keys')
    .then(raw=>{
      raw.rows.forEach(k=>{
        const cc = convertScToCc(k.snake);
        // compact by stripping out all falsey fields 
        const compacted = {};
        for(let field in k){
          if(k[field]){
            compacted[field] = k[field];
          }
        }
        // populate the object of all keys
        if(!hash_snake[k.snake]){
          hash_snake[k.snake] = compacted;
          hashCamel[cc] = compacted;
        }
      });
      console.log({hashCamel})
    })

    .then(()=>{

      // create table object 
      // snake and camel have the same info, so just use one
      // first step gets as far as creating empty objects,
      // and listing keys in both cases
      const tables = {};

      for(let k in hash_snake){
        const cc = convertScToCc(k);
        const theK = hash_snake[k];
        // TABLES
        if(Array.isArray(theK.tables)){
          theK.tables.forEach(table_snake_case=>{
            // list all tables
            if(!tables[table_snake_case]){
              tables[table_snake_case] = {
                snakesHash: {},
                camelsHash: {},
              };
            }
            tables[table_snake_case].snakesHash[k] = true;
            tables[table_snake_case].camelsHash[cc] = true;
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
        for(let k in theT.camelsHash){
          _camels.push(k);
        }
        for(let k in theT.snakesHash){
          _snakes.push(k);
        }
        const snakes = _snakes.sort();
        const camels = snakes.map(s=>convertScToCc(s));
        theT.snakes = snakes;
        theT.camels = camels;
        
        // next filter the newly created arrays
        theT.list_fetch_snakes = snakes.filter(k=>hash_snake[k].list_fetch);
        theT.post_snakes = snakes.filter(k=>hash_snake[k].post);
        theT.postCamels = camels.filter(cc=>hashCamel[cc].post);

        theT.post_req_snakes = snakes.filter(k=>hash_snake[k].post_req);
        theT.postReqCamels = camels.filter(cc=>hashCamel[cc].post_req);

        theT.put_snakes = snakes.filter(k=>hash_snake[k].put);
        theT.putCamels = camels.filter(cc=>hashCamel[cc].put);

        theT.subtable_snakes = snakes.filter(k=>hash_snake[k].subtable);
        theT.subtableCamels = camels.filter(cc=>hashCamel[cc].subtable);

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

      const objectSnakeString  = JSON.stringify(hash_snake, null, 2);
      const objectCamelString  = JSON.stringify(hashCamel, null, 2);
      const tablesString       = JSON.stringify(tables   , null, 2);

      // create legend objects
      // these are outside of tables
      const abbrevs_snake   = {};
      const labels_snake    = {};
      const defs_snake      = {};
      const units_snake     = {};
      const styles_snake    = {};

      for(let k in hash_snake){
        const theK = hash_snake[k];

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
      
      const abbrevsCamel   = {};
      const labelsCamel    = {};
      const defsCamel      = {};
      const stylesCamel    = {};
      const unitsCamel     = {};

      for(let k in hashCamel){
        const theK = hashCamel[k];

        if(theK.abbrevs && !abbrevsCamel[k]){
          abbrevsCamel[k] = theK.abbrevs;
        }
        
        if(theK.labels && !labelsCamel[k]){
          labelsCamel[k] = theK.labels;
        }

        if(theK.defs && !defsCamel[k]){
          defsCamel[k] = theK.defs;
        }
        
        if(theK.units && !unitsCamel[k]){
          unitsCamel[k] = theK.units;
        }

        if((theK.colors || theK.styles) && !stylesCamel[k]){
          stylesCamel[k] = {
            color: theK.colors,
            style: theK.styles ? JSON.parse(theK.styles) : null,
          };
        }
      }

      const abbrevs_prefix   = {};
      const labels_prefix    = {};
      const defs_prefix      = {};

      for(let k in hashCamel){
        const theK = hashCamel[k];

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

      for(let t in tables.terminology.camelsHash){
        terminologyCcFields.push({
          key: t,
          def: hashCamel[t].defs,
          sortOrder: hashCamel[t].sort_order,
          required: t==='termDef' || hashCamel[t].post_req,
        });
      }

      for(let f in tables.faq.camelsHash){
        if(f!=='faqSortOrder'){
          faqCcFields.push({
            key: f,
            def: hashCamel[f].defs,
            sortOrder: hashCamel[f].sort_order,
            required: f==='answer_basic' || hashCamel[f].post_req,
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
      const abbrevsCamelString  = JSON.stringify(abbrevsCamel , null, 2);
      const abbrevsPrefixString = JSON.stringify(abbrevs_prefix, null, 2);
      
      const labelsSnakeString   = JSON.stringify(labels_snake  , null, 2);
      const labelsCamelString   = JSON.stringify(labelsCamel  , null, 2);
      const labelsPrefixString  = JSON.stringify(labels_prefix , null, 2);

      const defsSnakeString     = JSON.stringify(defs_snake    , null, 2);
      const defsCamelString     = JSON.stringify(defsCamel    , null, 2);
      const defsPrefixString    = JSON.stringify(defs_prefix   , null, 2);

      const unitsSnakeString    = JSON.stringify(units_snake   , null, 2);
      const unitsCamelString    = JSON.stringify(unitsCamel   , null, 2);
      
      const stylesSnakeString   = JSON.stringify(styles_snake  , null, 2);
      const stylesCamelString   = JSON.stringify(stylesCamel  , null, 2);
      
      const terminologyCcFieldsString = JSON.stringify(terminologyCcFields, null, 2);
      const faqCcFieldsString         = JSON.stringify(faqCcFields, null, 2);
      // DONE !!
      const contents = `'use strict';
      
const hash_snake = ${objectSnakeString};
const hashCamel = ${objectCamelString};
const tables = ${tablesString};

const abbrevs_snake = ${abbrevsSnakeString};
const abbrevsCamel = ${abbrevsCamelString};
const abbrevs_prefix = ${abbrevsPrefixString};

const labels_snake = ${labelsSnakeString};
const labelsCamel = ${labelsCamelString};
const labels_prefix = ${labelsPrefixString};

const defs_snake = ${defsSnakeString};
const defsCamel = ${defsCamelString};
const defs_prefix = ${defsPrefixString};

const units_snake = ${unitsSnakeString};
const unitsCamel = ${unitsCamelString};

const styles_snake = ${stylesSnakeString};
const stylesCamel = ${stylesCamelString};

const terminology_cc_fields = ${terminologyCcFieldsString};
const faq_cc_fields = ${faqCcFieldsString};

module.exports = { 
  hash_snake,
  hashCamel,
  tables, 

  abbrevs_snake,
  abbrevsCamel, 
  abbrevs_prefix, 

  labels_snake, 
  labelsCamel,
  labels_prefix,
  
  defs_snake, 
  defsCamel,
  defs_prefix,

  units_snake, 
  unitsCamel,

  styles_snake,
  stylesCamel,

  terminology_cc_fields,
  faq_cc_fields,
}`;
      
      return fs.writeFile('./config-db/keys.js', contents, function (err) {
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