'use strict';
// endpoint is /api/pages/
const express             = require('express');
const router              = express.Router();
const { jwtStrategy   }   = require('./auth');
const { pagesFile }       = require('../config');
const logger              = require('log123').createLogger(pagesFile);
const { respondToError  } = require('../comm/responses');
const {
  terminology_cc_fields,
  faq_cc_fields }         = require('../config-db/keys');
  router.use(express.json());

const userContainer = {};
router.use((req, res, next)=>jwtStrategy(req, res, next, userContainer));

// @@@@@@@@@@@@@@ END HELPERS, START ENDPOINTS @@@@@@@@@@@@

router.get('/detention-model', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/dev-installation', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/drain-edge', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/faq', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({
        ok:'ok',
        fields: faq_cc_fields,
      });
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/ftp', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/installation-guidelines', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/products', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/profile-properties', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/reports', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/sales-training', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/challenge-private', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/challenge-private', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/session-create', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/sessions-list', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/stormwatch', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/sitemap-private', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({ok:'ok'});
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

router.get('/terminology', (req, res) => {
  return new Promise((resolve)=>{
    resolve();
  })
    .then(()=>{
      res.status(200).json({
        ok:'ok',
        fields: terminology_cc_fields,
      });
    })
    .catch(err=>{  
      respondToError(err, res);
    });
});

module.exports = { 
  router,
};