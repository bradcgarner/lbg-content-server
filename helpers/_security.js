'use strict';
const {
  isObjectLiteral,
  isPrimitiveNumber } = require('conjunction-junction');
const logger          = require('log123').createLogger('./helpers/sql.log');
 
const keysToOmitHash = {
  authToken: true,
};

const getIpAddr = req => {
  if(!req){
    return 'no request';
  }
  const header = 
  typeof req.header !== 'function' ? req.header('x-forwarded-for') : null;
  const remoteAddress = req.connection ? req.connection.remoteAddress : null;
  return {remoteAddress,header};
};

const hasSqlPrimitive = value => {

  if (value === null || value === undefined) {
    return false;
  }

  // sql regex reference: http://www.symantec.com/connect/articles/detection-sql-injection-and-cross-site-scripting-attacks
  const sql_meta = new RegExp('(%27)|(\')|(--)|(%23)', 'i');
  if (sql_meta.test(value)) {
    logger.info('meta offender', value);
    return {
      type: 'meta',
      value,
    };
  }

  const sql_meta2 = new RegExp('((%3D)|(=))[^\n]*((%27)|(\')|(--)|(%3B)|(;))', 'i');
  if (sql_meta2.test(value)) {
    logger.info('meta2 offender', value);
    return {
      type: 'meta2',
      value,
    };
  }

  const sql_xss = new RegExp('/((\%3C)|<)((\%2F)|\/)*[a-z0-9\%]+((\%3E)|>)/ix', 'i');
  if (sql_xss.test(value)) {
    logger.info('xss offender', value);
    return {
      type: 'xss',
      value,
    };
  }

  const sql_css = new RegExp('/((\%3C)|<)((\%69)|i|(\%49))((\%6D)|m|(\%4D))((\%67)|g|(\%47))[^\n]+((\%3E)|>)/I', 'i');
  if (sql_css.test(value)) {
    logger.info('css offender', value);
    return {
      type: 'css',
      value,
    };
  }

  const paranoid = new RegExp('/((\%3C)|<)[^\n]+((\%3E)|>)/I', 'i');
  if (paranoid.test(value)) {
    logger.info('paranoid offender', value);
    return {
      type: 'paranoid',
      value,
    };
  }
  
  const sql_typical = new RegExp('w*((%27)|(\'))((%6F)|o|(%4F))((%72)|r|(%52))', 'i');
  if (sql_typical.test(value)) {
    logger.info('typical offender', value);
    return {
      type: 'typical',
      value,
    };
  }

  const sql_union = new RegExp('((%27)|(\'))union', 'i');
  if (sql_union.test(value)) {
    logger.info('union offender', value);
    return {
      type: 'union',
      value,
    };
  }

  return false;
};

const hasSql = (item, keysToOmitHash = {}) => {
  if(item === null || item === undefined || typeof item === 'undefined'){
    return false;
  }
  if(typeof item === 'boolean'){
    return false;
  }
  if(isPrimitiveNumber(item)){
    return false;
  }
  if(typeof item === 'string'){
    const response = hasSqlPrimitive(item);
    if(response){
      return response;
    }
    return false;
  }
  if(Array.isArray(item)){
    let isOk = true;
    let thisResponse;
    item.forEach(subItem=>{
      const thisResponse = hasSql(subItem, keysToOmitHash);
      if(thisResponse){
        isOk = false;
      }
    });
    if(!isOk){
      return thisResponse;
    }
    return false;
  }
  if(isObjectLiteral(item)){
    let response;
    for(let k in item){
      if(keysToOmitHash[k]){
        return false;
      }
      response = hasSql(item[k], keysToOmitHash);
      if(response){
        return response;
      }
    }
    return false;
  }
  return hasSqlPrimitive(item);
};

module.exports = {
  getIpAddr,
  hasSql,
  keysToOmitHash,
};
