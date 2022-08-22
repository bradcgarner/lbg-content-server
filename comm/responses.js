'use strict';
const { commFile } = require('../config');
const logger       = require('log123').createLogger(commFile);

const respondToError = (err, res) => {
  if(typeof err.userMessage === 'string') {
    logger.error(err);
    const code = err.code || 400;
    const response = {message: err.userMessage};
    console.log(response)
    return res.status(code).json(response);
  } else if(
    err.message.includes('incorrect') ||
    err.message.includes('invalid') 
  ){
    logger.error(err);
    return res.status(400).json({message: 'Error: Incorrect or Invalid Request'});
  } else if(
    err.message.includes('not found')
  ){
    logger.error(err);
    return res.status(400).json({message: 'Error: Not Found'});
  } else {
    logger.error(err);
    return res.status(500).json({message: 'Error'});
  } 
};

module.exports = {
  respondToError
};