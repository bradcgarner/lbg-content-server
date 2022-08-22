'use strict';

const { 
  notificationsFile,
  SENDGRID_API_KEY }      = require('../config');
const logger              = require('log123').createLogger(notificationsFile); 
const generator           = require('generate-password');
const sgMail              = require('@sendgrid/mail');
const knex                = require('../db-sql');

sgMail.setApiKey(SENDGRID_API_KEY);

const handleAttemptedHack = (path, req, res, foundHack, userContainer={}) => {

  // eslint-disable-next-line no-console
  console.log(`attempted hack: at ${path}`);
  res.status(500).json({message: 'Error'});

  const uniqueId = generator.generate({
    length: 20,
    numbers: true
  });

  const text = `
  LOG ID: ${uniqueId};;
  PATH: ${path};;
  \n\n
  FOUND HACK: ${JSON.stringify(foundHack,null,2)};;
  \n\n
  USER:
  ${JSON.stringify(userContainer,null,2)};;
  \n\n
  PARAMS:
  ${JSON.stringify(req.params,null,2)};;
  \n\n
  QUERY:
  \n\n
  ${JSON.stringify(req.query,null,2)};;
  BODY:
  ${JSON.stringify(req.body,null,2)};;
  END`;	

			
  const mailOptions = {
    subject: 'ATTEMPTED HACK',
    from: 'brad@greenroofdiagnostics.org',
    to:   ['brad@urbanmeadow.org','brad@bradgarner.com'],
    text,
  };


  sgMail.send(mailOptions, _err_ =>{
    if (_err_) logger.error('Error sending email about error!!!', _err_); 
  });

  // const errSql = `insert into errors_log (err) values ('${JSON.stringify(e)}');`;
  // logger.info('errSql',errSql);

  return //knex.raw(errSql)
    // .then(()=>{
    //   sgMail.send(mailOptions, _err_ =>{
    //     if (_err_) logger.error('Error email error!!!', _err_); 
    //     else logger.info('Error email sent.');
    //   });
    // })
    // .then(()=>{
    //   throw {message: 'stopping'};
    // })
    // .catch(_err=>{
    //   if(_err.message !== 'stopping'){
    //     logger.error(`We're out of options! Error: ${_err} in saving error to Mongo!!!`);
    //   }
    // });
};

module.exports = {
  handleAttemptedHack,
};