'use strict';

const { 
  convertTimestampToString }  = require('conjunction-junction'); 
const generator               = require('generate-password');
const { 
  commFile,
  SENDGRID_API_KEY }          = require('../config');
const logger                  = require('log123').createLogger(commFile); 
const sgMail                  = require('@sendgrid/mail');
const knex                    = require('../db-sql');

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

  return; //knex.raw(errSql)
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

const listUnique = arr => {
  const obj = {};
  if(Array.isArray(arr)){
    arr.forEach(t=>{
      obj[t] = true;
    });
  }
  const newArr = [];
  for(let k in obj){
    newArr.push(k);
  }
  return newArr;
};

const purple = '#73308a'; 

const createResponse = submission => {

  const site = submission.site;
  const type = submission.type;
  if(!site){
    return;
  }
  if(!type){
    return;
  }
  const config =  {};

  const location = `${submission.address || ''} ${submission.city || ''} ${submission.state || ''} ${submission.country || ''}`;

  const identifyingText = `Name: ${submission.name} \n
  Email: ${submission.email} \n
  ${typeof submission.company !== 'undefined' ? `Company: ${submission.company} \n` : ''}
  ${typeof submission.phone !== 'undefined' ? `Phone: ${submission.phone} \n` : ''}
  ${typeof submission.cc !== 'undefined' ? `cc: ${submission.cc} \n`: ''}
  ${typeof submission.city !== 'undefined' ? `Location: ${location}\n` : ''}
  ${typeof submission.message !== 'undefined' ? `${config.messageName}: ${submission.message} \n`: ''}`;

  const identifyingHtml = `<p>Name: ${submission.name}</p>
  <p>Email: ${submission.email}</p>
  ${typeof submission.company !== 'undefined' ? `<p>Company: ${submission.company}</p>` : ''}
  ${typeof submission.phone !== 'undefined' ? `<p>Phone: ${submission.phone}</p>` : ''}
  ${typeof submission.cc !== 'undefined' ? `<p>cc: ${submission.cc}</p>`: ''}
  ${typeof submission.city !== 'undefined' ? `<p>Location: ${location}</p>` : ''}
  ${typeof submission.message !== 'undefined' ? `<p>${config.messageName}: ${submission.message}</p>`: ''}`;

  const internalText = `
  Type: ${type} \n
  Id: ${submission.id} \n
  Received: ${convertTimestampToString(submission.timestampCreated, 'd t z')}`;

  const internalHtml = `
  <p>Type: ${type}</p>
  <p>Id: ${submission.id}</p>
  <p>Received: ${convertTimestampToString(submission.timestampCreated, 'd t z')}</p>`;

  const htmlOut =`
<p style="color: ${purple}; font-weight: bold;">${config.processText}</p>

${submission.html ? ` ${submission.html} <br/>` : '' }
${config.html ? ` ${config.html} <br/>`: ''}

<p>We received the following information from you: </p>
<hr />
<br/>
${identifyingHtml}
<br/>
<br/>
<br/>
${config.logo}
<br/>
<hr/>
<br/>
<br/>
<br/>`;

  const htmlIn = type === 'request-close-session' ?
    `<p style="color: ${purple}; font-weight: bold;">
Submit Presentation to AIA:
</p>
<p>1. Go to Purple-Roof <a href="https://www.purple-roof.com/presentation-create?session=${submission.uniqueSessionCode}">
https://www.purple-roof.com/presentation-create?session=${submission.uniqueSessionCode}
</a> to get basic info.</p>
<p>2. Go to AIA <a href="https://www.aia.org/my-account/ce-provider">
https://www.aia.org/my-account/ce-provider
</a> and log in.
</p>
<p>3a. ADD A SESSION 1/3. Scroll down and click on "Report Single Attendance".  This should take you to <a href="https://www.aia.org/my-account/ce-provider/courses">
https://www.aia.org/my-account/ce-provider/courses
</a>.
</p>
<p>3b. ADD A SESSION 2/3. Click on the course name.  This should take you to <a href="https://www.aia.org/my-account/ce-provider/courses/6200457">
https://www.aia.org/my-account/ce-provider/courses/6200457
</a> (or a similar page if we have more than 1 course).
</p>
<p>3c. ADD A SESSION 3/3. Scroll down and click "ADD A SESSION".  This should open a dialog box.  Enter all applicable info.  Delivery is normally private.  OK to set start and end times to 12:00 and 13:00. Leave Session Capacity and Special Instructions blank.  Enter 0 for all price. Sign-in url can be url provided on the Purple-Roof page.  Notice the session code at the top.  Click save.
</p>
<p>4a. Go back to the Purple-Roof page (item #1 in this list).  Enter the session code.
</p>
<p>4b. Click "save"</p>
<p>4c. Scroll down and click "close registration".</p>
<p>4d. Just below that click "Download as csv to bulk upload attendance to AIA".</p>
<p>5a. Go back to AIA <a href="https://www.aia.org/my-account/ce-provider">https://www.aia.org/my-account/ce-provider
</a> AIA and click on "Bulk Upload Attendance"</p>
<p>5b. Select the csv file you just downloaded.  If you get any errors when uploading, send Brad the csv file AND a screenshot of the error.</p>
<p>6. Click "Download CSV with links to certificates" and email that to ${submission.presenterEmail}.</p>
<p>DONE!!</p>`:
    `${htmlOut}
<hr/>
<br/>
${internalHtml}
<br/>
<br/>`;

  const textOut = `
${config.subjectOut}
${config.processText}
${config.message ? config.message: ''}
We received the following information from you:
${identifyingText}`;

  const textIn = `
${config.subjectIn}
Information Received:
${identifyingText}
${internalText}`;

  const mailOptionsOut = config.internalOnly ? null : {
    from:    config.sendFrom,
    to:      [submission.email],
    bcc:     config.receive,
    subject: config.subjectOut,
    text:    textOut,
    html:    htmlOut,
  };
    
  const mailOptionsInternal = {
    from:    config.sendFrom,
    to:      config.receive,
    subject: `${config.subjectIn} from ${submission.name}`,
    text:    textIn,
    html:    htmlIn,
  };

  return {
    mailOptionsOut,
    mailOptionsInternal
  };
};

const notify = submission => {

  // submission = { 
  // site: required (pr, sgs, susa, etc)
  // type: inquiry, password, user, challenge
  // address: street address
  // city
  // state
  // country
  // name
  // email
  // company
  // phone
  // cc: only for inquiries
  // message: only for inquiries
  // id: id of log
  // timestampCreated
  // html: optional }

  // this will throw an error if submission does not include site, type, message
  const {
    mailOptionsOut,
    mailOptionsInternal
  } = createResponse(submission); 

  sgMail.send(mailOptionsInternal, _err_ =>{
    if (_err_) {
      logger.error('Error sending email!', _err_); 
      throw _err_;
    }
  });

  if(mailOptionsOut){ // i.e. not if internalOnly
    const message = typeof submission.message === 'string' ? submission.message.slice(0,100) : '' ;
    logger.info(mailOptionsOut.subject, message,'...');
    sgMail.send(mailOptionsOut, _err_ =>{
      if (_err_) {
        logger.error('Error sending email!', _err_); 
        throw _err_;
      }
    });
  }

};

module.exports = {
  notify, 
  handleAttemptedHack,
};