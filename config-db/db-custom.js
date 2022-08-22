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
  isPrimitiveNumber,
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

const createUpdateSimpleTableSql = (table, item, returnId, allowJSON) => {
  const method        = isPrimitiveNumber(item.id) ? 'PUT' : 'POST';
  const itemFormatted = formatBodyForKnex(item, table, method, {type:'raw', allowJSON });
  const keys   = [];
  const values = [];

  for(let key in itemFormatted){
    keys.push(key);
    values.push(itemFormatted[key]);
  }
  const returning = returnId ? ' returning id' : '';
  const rawSql = 
    method === 'PUT' ?
      `update ${table} set (${keys.join(', ')}) = (${values.join(', ')}) where id = ${item.id};` :
      `insert into ${table} (${keys.join(', ')}) values (${values.join(', ')})${returning};` ;
  return rawSql;
};

const createUpdateSimpleTableArrSql = (tableName, items, allowJSON) => {
  if(!Array.isArray(items)) { 
    return ''; 
  }
  if(items.length <= 0) { 
    return ''; 
  }
  const rawSqlArr = items.map(p=>{
    const item_snake = convertObjectKeyCase(p, 'snake');
    return createUpdateSimpleTableSql(tableName, item_snake, null, allowJSON);
  });
  return rawSqlArr.join(' ');
};

const createSimpleTableSelectSql = (table, field, id, orderBy='timestamp_created', sort='asc') => {
  return `select * from ${table} where ${field} = ${id} and omit is not true order by ${orderBy} ${sort};`;
};


module.exports = { 
  createTimeframes,
  formatBodyForKnex,
  createUpdateSimpleTableArrSql,
  createUpdateSimpleTableSql,
  createSimpleTableSelectSql,
};