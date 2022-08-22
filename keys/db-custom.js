/* project-specific functions related to formatting data
 * and SQL statements for the project's database schema 
 */

'use strict';
const { keysHelpersFile } = require('../config');
const logger              = require('log123').createLogger(keysHelpersFile);
const { 
  createTimeframes,
  convertObjectKeyCase,
  formatObjectForKnex,
  limitObjectKeys,       } = require('conjunction-junction');
const {
  tables                 } = require('./keys');


const formatBodyForKnex = (body, table, method, option) => {
  // input: body = req.body, expect to be sent in camelCase
  // keys: all keys
  // table: db table, corresponds with keys
  // action: HTTP method: put or post , defaults to 'PUT'
  // output: object formatted for Knex with ONLY the acceptable keys

  const objectCase    = convertObjectKeyCase(body, 'snake');
  const objectForKnex = formatObjectForKnex(objectCase, option);

  const limitingKey = 
    method === 'POST' ? 
      'post_snakes' : 
      method === 'PUT' ? 
        'put_snakes' :
        '';
  const keysLimiting  = tables[table] && Array.isArray(tables[table][limitingKey]) ? tables[table][limitingKey] : [] ;
  const objectLimited = limitObjectKeys(objectForKnex, keysLimiting);
  return objectLimited;
};

module.exports = { 
  createTimeframes,
  formatBodyForKnex,
};