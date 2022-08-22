'use strict';

require('dotenv').config(); // this is unconditional, which will require heroku to install it (which is not needed), but since it is listed in core dependencies, it at least won't break heroku. Later learn to do it conditionally.

module.exports = {

  PORT:                process.env.PORT || 8080,
  TEST_PORT:           process.env.TEST_PORT || 8081,
  
  CLIENT_ORIGIN:       process.env.CLIENT_ORIGIN || 'http://localhost:3300',
  JWT_SECRET:          process.env.JWT_SECRET,
  JWT_EXPIRY:          process.env.JWT_EXPIRY,
  KEY:                 process.env.KEY,
  
  DATABASE_URL_MONGO:  process.env.DATABASE_URL_MONGO,
  
  DATABASE_URL:        process.env.DATABASE_URL      || 'postgres://localhost/rain',
  TEST_DATABASE_URL:   process.env.TEST_DATABASE_URL || 'postgres://localhost/rain-test',
  STORMWATCH_DATABASE_URL: process.env.STORMWATCH_DATABASE_URL || 'postgres://localhost/rain-test',
  
  DB_URL_MONGO:        process.env.DB_MODE === 'test' ? process.env.DB_URL_MONGO_TEST : process.env.DB_URL_MONGO,

  SENDGRID_API_KEY:    process.env.SENDGRID_API_KEY,
  
  sampleSchedRule:     process.env.SAMPLE_SCHEDULE_RULE || '*/5  * * * *',

  keysCompileFile:     process.env.LOG_MODE === 'file' ? './keys/compile-keys.log' : '' ,
  keysCalcCompileFile: process.env.LOG_MODE === 'file' ? './keys/compile-keys-calc.log' : '' ,

  commFile:            process.env.LOG_MODE === 'file' ? './comm/comm.log'         : '' ,

  modelerFile:         process.env.LOG_MODE === 'file' ? './routers/modeler.log'   : '' ,
  authFile:            process.env.LOG_MODE === 'file' ? './routers/auth.log'      : '' ,
  keysFile:            process.env.LOG_MODE === 'file' ? './routers/keys.log'      : '' ,
  pagesFile:           process.env.LOG_MODE === 'file' ? './routers/pages.log'     : '' ,
  faqFile:             process.env.LOG_MODE === 'file' ? './routers/faq.log'       : '' ,
  termFile:            process.env.LOG_MODE === 'file' ? './routers/term.log'       : '' ,
  contentFile:         process.env.LOG_MODE === 'file' ? './routers/content-edit.log' : '' ,
  productsFile:        process.env.LOG_MODE === 'file' ? './routers/products.log'  : '' ,
  projectsFile:        process.env.LOG_MODE === 'file' ? './routers/projects.log'  : '' ,
  detailsFile:         process.env.LOG_MODE === 'file' ? './routers/details.log'   : '' ,
  usersFile:           process.env.LOG_MODE === 'file' ? './routers/users.log'     : '' ,
  sessionsFile:        process.env.LOG_MODE === 'file' ? './routers/sessions.log'  : '' ,
  attendeesFile:       process.env.LOG_MODE === 'file' ? './routers/attendees.log' : '' ,
  inqFile:             process.env.LOG_MODE === 'file' ? './routers/inquiries.log' : '' ,
  challengeFile:       process.env.LOG_MODE === 'file' ? './routers/challenge.log' : '' ,
  
  detModelFile:        process.env.LOG_MODE === 'file' ? './modeler-detention/det.log' : '' ,

  schedules: {
    enabled: {
      rule:    'set by admin on server',
      enable:  process.env.ENABLE_SCHEDULES, // true
      label:   'automated schedules enabled, set to false to turn off ALL schedules',
      readMe:  '',
    },
    contentFocusAggregation: {
      rule:    process.env.SCHED_CONTENT_FOCUS_AGG, // * */4 * * *
      enable:  process.env.ENABLE_CONTENT_FOCUS_AGG, // true
      logFile: process.env.LOG_MODE === 'file' ? 
        './schedules/content-focus.log' : '' ,
      label:   'aggregate content-focus data from 1 session',
      readMe:  '',
    },
  }
};