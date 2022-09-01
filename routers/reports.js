'use strict';
// endpoint is /api/reports/
const express              = require('express');
const router               = express.Router();
const {
  convertStringToTimestamp,
  convertObjectKeyCase,
  isPrimitiveNumber,
  isObjectLiteral,
  isValidDate,
  convertTimestampToString,
  precisionRound,
  validateRawKnex }        = require('conjunction-junction');
const { reportsFile }      = require('../config');
const { products }         = require('../config-db/data');
const knex                 = require('../db-sql');
const logger               = require('log123').createLogger(reportsFile);
const { respondToError}    = require('../comm/responses');
const { hasSql }           = require('../helpers/_security');
const { handleAttemptedHack } = require('../comm/hack');

router.use(express.json());

const internalCompanies = {
  'Sempergreen USA': true,
  'Green Roof Diagnostics': true,
};

const thicknessLyrs = {
  'so': true,
  'mw': true,
  'hc': true,
  'gv': true,
};

const typeLyrs = {
  'vg': true,
  'pt': true,
  'dr': true,
};

const defaultShareId = '2_2_1';

const getShareIds = (shares, type) => {
  if(type === 'details-shares'){
    return shares.map(s=>s.id_share);
  }
  if(type === 'details-loads'){
    const sharesHash = {};
    shares.forEach(s=>{
      sharesHash[s.id_share] = true;
    });
    const shareIds = [];
    for(let id in sharesHash){
      if(id === 'default'){
        shares.push(defaultShareId);
      } else {
        shareIds.push(id);
      }
    }
    return shareIds;
  }
  return [];
}; 

const formatDetailsSharesData = (shares, layers) => {

  const data = {
    count: {count: shares.length},
    userType: {},
    // conceptCode: {},
    detailType: {},
    // detailPartType: {},
    os:{},
    browser:{},
    osB: {},
    osBV:{},
    thickness: {},
    posts: {
      loads: 0,
      unique: 0,
      over2: 0,
      over5: 0,
    },
    units: {},
    partner: {},
  };

  const sharesHydrated = {};
  if(Array.isArray(shares)){
    shares.forEach(s=>sharesHydrated[s.id_share] = convertObjectKeyCase(s,'cC'));
  }
  
  const usersByConsentDate = {};

  if(Array.isArray(layers)){
    layers.forEach(l=>{
      const thisShare = sharesHydrated[`${l.id_share}`] || {};
      if(!Array.isArray(thisShare.layers)){
        thisShare.layers = [];
      }
      thisShare.layers.push(convertObjectKeyCase(l));
    });
  }

  let countAnonymous = 0;
  for(let idShare in sharesHydrated){
    const s = sharesHydrated[idShare];
    const ls = s.localStorage || {};

    const shareTs = isValidDate(s.timestampCreated) ? s.timestampCreated : convertStringToTimestamp(s.timestampCreated);
    const shareTString = isValidDate(shareTs) ? shareTs.getTime() : '0';

    if(!usersByConsentDate[`${ls.consented}-id-${s.idUser}`]){
      usersByConsentDate[`${ls.consented}-id-${s.idUser}`] = {};
    }
    if(!usersByConsentDate[`${ls.consented}-id-${s.idUser}`][shareTString]){
      usersByConsentDate[`${ls.consented}-id-${s.idUser}`][shareTString] = ls;
    }
    if(!ls.consented){
      countAnonymous += 1;
    }
  }

  const users = {};
  let userCount = 0;
  for(let consentTime in usersByConsentDate){
    const times = usersByConsentDate[consentTime];
    let highestTime = 0;
    let mostRecentLs = {};
    for(let time in times){
      const thisLs = times[time];
      const int = parseInt(time, 10);
      if(int > highestTime){
        highestTime = int;
        mostRecentLs = thisLs;
      }
    }

    users[`${highestTime}`] = mostRecentLs;
    userCount += 1;
  }

  data.users = users;
  data.usersByConsentDate = usersByConsentDate;
  data.countAnonymous = {countAnonymous};
  data.userCount = {userCount};

  for(let idShare in sharesHydrated){
    const s = sharesHydrated[idShare];
    const ls = s.localStorage || {};

    const shareTs = isValidDate(s.timestampCreated) ? s.timestampCreated : convertStringToTimestamp(s.timestampCreated);
    const shareTString = isValidDate(shareTs) ? shareTs.getTime() : '0';

    const dt = s.detailType; // typical
    const dpt = s[dt]; // gr

    const applicableLayers = 
      Array.isArray(s.layers) ?
        s.layers.filter(l=>l.dpt === dpt).map(l=>convertObjectKeyCase(l,'cC')) : [];

    let fullThickness = 0;

    applicableLayers.forEach((layer,i)=>{
      const lyr = layer.lyr;
      const thisProduct = products[`${layer.idProduct}`] || {};

      if(typeLyrs[lyr]){
        if(!data[lyr]){
          data[lyr] = {};
        }
        const typeProduct = thisProduct.typeProduct;
        if(!data[lyr][typeProduct]){
          data[lyr][typeProduct] = 1;
        } else {
          data[lyr][typeProduct] += 1;
        }
      }

      if(thicknessLyrs[lyr]){
        if(!data[lyr]){
          data[lyr] = {};
        }
        const thicknessFrom = `${layer.thicknessMm}`;
        const thicknessTo = isPrimitiveNumber(layer.thicknessMm) ?
				  `${layer.thicknessMm}` : '0' ;
        if(!data[lyr][thicknessFrom]){
          data[lyr][thicknessTo] = 1;
        } else {
          data[lyr][thicknessTo] += 1;
        }

        if(isPrimitiveNumber(layer.thicknessMm)){
          fullThickness += layer.thicknessMm;
        }
      }
    });

    if(!data.thickness[`${fullThickness}`]){
      data.thickness[`${fullThickness}`] = 1;
    } else {
      data.thickness[`${fullThickness}`] += 1;
    }

    const namePartner = s.nameSystem || s.namePartner;
    if(!data.partner[namePartner]){
      data.partner[namePartner] = 1;
    } else {
      data.partner[namePartner] += 1;
    }
  
    if(s.os){
      if(!data.os[s.os]){
        data.os[s.os] = 1;
      } else {
        data.os[s.os] += 1;
      }
    }

    if(s.browserName){
      if(!data.browser[s.browserName]){
        data.browser[s.browserName] = 1;
      } else {
        data.browser[s.browserName] += 1;
      }

      if(!data.osB[`${s.os}-${s.browserName}`]){
        data.osB[`${s.os}-${s.browserName}`] = 1;
      } else {
        data.osB[`${s.os}-${s.browserName}`] += 1;
      }
    }

    if(s.browserVersion){
      if(!data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`]){
        data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`] = 1;
      } else {
        data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`] += 1;
      }
    }

    const shareCountKeys = [
      'idUser',
      'company',
      'detailType',
    ];

    shareCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = 
				k === 'idUser' && s.idUser ?
				  `${s.firstName} ${s.lastName}` :
				  k === 'idUser' ?
				    'unknown' :
			  s[k];
      if(!data[k][`${value}`]){
        data[k][`${value}`] = 1;
      } else {
        data[k][`${value}`] += 1;
      }
    });

    const partCountKeys = [
      'border',
      'edgeB',
      'edgeP',
      'edgeT',
      'typical',
      'middle',
      'overlay',
      'perimeter',
    ];

    partCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = s[k];
      if(!data[k][value]){
        data[k][value] = 1;
      } else {
        data[k][value] += 1;
      }
    });
    
    const lsCountKeys = [
      'units',
      'model',
      'modelCountry',
      'modelLocation',
      'profileEtModel',
      'userHistory',
      'userStats',
    ];

    lsCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = ls[k];
      if(!data[k][value]){
        data[k][value] = 1;
      } else {
        data[k][value] += 1;
      }
    });

    // if this share is the most recent in the batch for this user
    if(users[shareTString]){
      for(let k in ls){
        const value = ls[k];
        if(k.slice(0,5) === 'post_'){
          const count = parseInt(value, 10);
          data.posts.loads += 1;
          data.posts.unique += count;
          if(count > 2){
            data.posts.over2 += 1;
          }
          if(count > 5){
            data.posts.over5 += 1;
          }
        }
      }
    }

    const userType = // each nests the latter
    internalCompanies[s.company] ?
      'internal':
      s.idUser || ls.authToken || ls.userAccountConsent ?
        'auth' : 
        s.userHistory ?
          'history' :
          s.userStats ?
            'stats':
            'anonymous';

    if(users[shareTString] || userType === 'anonymous'){
      if(!data.userType[userType]){
        data.userType[userType] = 1;
      } else {
        data.userType[userType] += 1;
      }
    }

  }
  data.sharesHydrated = sharesHydrated;

  return data;

};

const createEmptyDetailsReport = () => ({
  browser: { 
    groupType: 'nested pie', // split this object into multiple reports
    groupLabel: 'browser and OS usage',
    browser: { label: 'browser', order: 1, },
    os: { label: 'operating system', order: 2, },
    osB: { label: 'operating system + browser', order: 3, },
    osBV: { label: 'os + browser + version', order: 4, },
  },
  stats: {
    groupType: 'simple bar', // treat this object as one report, each subGroup should has a single numeric value
    groupLabel: 'usage statistics',
    count: { label: 'total count', order: 1, },
    userCount: { label: 'estimated count of unique users', order: 2, },
    userHistory: { label: 'count of users who accept history cookies', order: 4, },
    userStats: { label: 'count of users who accept stats cookies', order: 5, },
    countAnonymous: { label: 'anonymous count (no cookies)', order: 6, },
  },
  userTypes: {
    groupType: 'simple pie', // treat this object as one report, there is only 1 subGroup (that has multiple values)
    groupLabel: 'user types',
    userType: { label: 'types of users', order: 0, },
  },
  users: {
    groupType: 'nested bar', // split this object into multiple reports
    groupLabel: 'activity of users with login accounts',
    company: { label: 'company of authorized user', order: 0, },
    idUser: { label: 'authorized user', order: 1, },
  },
  units: {
    groupType: 'simple pie', // treat this object as one report, there is only 1 subGroup (that has multiple values)
    groupLabel: 'units',
    units: { label: 'most recently used units', order: 0, },
  },
  partners: {
    groupType: 'simple pie', // treat this object as one report, there is only 1 subGroup (that has multiple values)
    groupLabel: 'partners',
    partner: { label: 'partner selected', order: 0, },
  },
  detailTypes: {
    groupType: 'simple pie', // treat this object as one report, there is only 1 subGroup (that has multiple values)
    groupLabel: 'detail types',
    detailType: { label: 'types of details generated', order: 0, },
  },
  detailParts: {
    groupType: 'nested pie', // split this object into multiple reports
    groupLabel: 'types of detail parts generated',
    typical: { label: 'typical', order: 0, },
    edgeT: { label: 'edge of typical', order: 1, },
    border: { label: 'border', order: 2, },
    edgeB: { label: 'far edge of border (e.g. wall)', order: 3, },
    middle: { label: 'profile at middle', order: 10, },
    overlay: { label: 'element in middle', order: 11, },
    perimeter: { label: 'profile around middle', order: 12, },	
    edgeP: { label: 'edge around middle', order: 13, },
  },
  lyrTypes: {
    groupType: 'nested pie', // split this object into multiple reports
    groupLabel: 'types of details layers',
    vg: { label: 'vegetation type', order: 0, },
    dr: { label: 'drain type', order: 1, },
    pt: { label: 'protection type', order: 2, },
  },
  thickness: {
    groupType: 'nested pie', // split this object into multiple reports
    groupLabel: 'thicknesses of details and profile layers',
    thickness: { label: 'overall thickness (exluding building envelope)', order: 0, },
    so: { label: 'soil thickness', order: 0, },
    mw: { label: 'NMW thickness', order: 1, },
    hc: { label: 'HC thickness', order: 2, },
    gv: { label: 'gravel thickness', order: 3, },
    xp: { label: 'XPS thickness', order: 4, },
  },
  posts: {
    groupType: 'simple bar', // treat this object as one report, there is only 1 subGroup (that has multiple values)
    groupLabel: 'blog activity by detail users',
    posts: { label: 'blog activity by detail users', order: 0, },
  },
  models: {
    groupType: 'nested bar', // split this object into multiple reports
    groupLabel: 'ET model activity by detail users',
    model: { label: 'total count of ET models run', order: 0, },
    profileEtModel: { label: 'most recent ET model profile run', order: 1, },
    modelCountry: { label: 'most recent ET model country run', order: 2, },
    modelLocation: { label: 'most recent ET model run', order: 3, },
  },
});

const validateSubGroupKey = (key, data) => {
	 
  const d = data || { [key] : 'fake'};

  return typeof d[key] !== 'undefined' && 
		key !== 'groupType' && 
		key !== 'order' && 
		key !== 'groupLabel' &&
		key !== 'isSimple' && 
		key !== 'individualReports';
};

const createDetailsSharesReport = (shares, layers) => {
  const data = formatDetailsSharesData(shares, layers);
	
  const report = createEmptyDetailsReport();
	
  const baseWidth = 1000;

  // @@@@@@@ PUT EACH GROUP INTO AN ARRAY @@@@@
  for(let groupName in report){ // e.g. 'detailParts'
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    thisGroup.isSimple = typeof thisGroup.groupType === 'string' &&
		  thisGroup.groupType.includes('simple');

    thisGroup.individualReports = [];

    // nested
    for(let subGroupName in thisGroup){
      const subGroup = thisGroup[subGroupName] || {};
			
      const isValidKey = validateSubGroupKey(subGroupName, data);

      if(isValidKey){
        thisGroup.individualReports.push(Object.assign({},
          subGroup, 
          {
            subGroupName
          }
        ));
        delete thisGroup[subGroupName];
      }
    }
  }
	
  for(let groupName in report){
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    if(Array.isArray(thisGroup.individualReports)){ // just checking, should be true

      thisGroup.individualReports.forEach(r=>{

        // !isSimple (i.e. is nested)
        if(!Array.isArray(r.values)){
          const thisData = data[r.subGroupName] || {};
          r.values = [];

          let itemIsInt;
				  let valueIsInt;

          // populate values
          for(let valueName in thisData){
										
            // e.g. so: { '100' : 50 }
            // 100 is thickness and should be read as an int
            const itemNameAsInt = parseInt(valueName, 10);
            itemIsInt = itemIsInt || `${itemNameAsInt}` === valueName;
            const itemName = itemIsInt ? itemNameAsInt : valueName;
										
            // i.e. if value is already detected as an int
            // keep it as an int, not throwing off due to null, etc.
            valueIsInt = valueIsInt || isPrimitiveNumber(data[r.subGroupName][valueName]);
									
            r.values.push({
              subGroupName: itemName, 
              value: data[r.subGroupName][valueName]
            });
          }
          r.itemIsInt  = itemIsInt;
          r.valueIsInt = valueIsInt;
        }
      });
    }
  }
	
  // get total and final values
  // numeric only
  for(let groupName in report){
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    if(Array.isArray(thisGroup.individualReports)){

      thisGroup.individualReports.forEach(r=>{

        if(r.valueIsInt){
          r.valueSum = 0;
          r.finalValue = 0;

          if(Array.isArray(r.values)){ // just type checking, should always be true
            r.values.forEach(item=>{
              if(isPrimitiveNumber(item.value)){
                r.valueSum += item.value;
                r.finalValue += item.value;
              } else {
                r.valueSum += r.finalValue;
              }
            });
          }
        }
      });
    }
  }
				
  // sort values
  for(let groupName in report){
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    if(Array.isArray(thisGroup.individualReports)){

      thisGroup.individualReports.forEach(r=>{

        if(Array.isArray(r.values)){
          if(r.itemIsInt){
            r.values.sort((a,b)=>{
              if(a.item > b.item){
                return 1;
              }
              if(a.item < b.item){
                return -1;
              }
              return 0;
            });
          } else {
            r.values.sort((a,b)=>{
              if(a.value > b.value){
                return -1;
              }
              if(a.value < b.value){
                return 1;
              }
              return 0;
            });
          }
        }
      });
    }
  }
				
        

  for(let groupName in report){
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    if(Array.isArray(thisGroup.individualReports)){

      thisGroup.individualReports.forEach(r=>{
        const widthPerUnit = precisionRound(baseWidth/r.valueSum, 2);

        if(Array.isArray(r.values)){

          let xPrior = 0;
			
          r.values.forEach((value, i)=>{
            value.x = xPrior;
            const numericValue = isPrimitiveNumber(value.value) ?
              value.value : r.finalValue;
            value.width = precisionRound(numericValue * widthPerUnit, 2);
            xPrior += value.width;
          });
        }
      });
    }
  }
  
	
  // sort individual reports
  for(let groupName in report){
    const thisGroup = report[groupName] || {}; // e.g. 'typical'
		
    if(Array.isArray(thisGroup.individualReports)){
      thisGroup.individualReports.sort((a,b)=>{
        if(a.order > b.order){
          return 1;
        }
        if(a.order < b.order){
          return -1;
        }
        return 0;
      });
    }
  }

  // sort all reports
  const orderedReport = [];
  for(let reportName in report){
    orderedReport.push(Object.assign({},
      report[reportName],
      {
        reportName,
      })
    );
  }

  orderedReport.sort((a,b)=>{
    if(a.order > b.order){
      return 1;
    }
    if(a.order < b.order){
      return -1;
    }
    return 0;
  });
	
  
  return {
    report: orderedReport,
    data 
  };

};

const formatDetailsLoadsData = (loads, layers) => {

  const data = {
    count: {count: loads.length},
    userType: {},
    // conceptCode: {},
    detailType: {},
    // detailPartType: {},
    os:{},
    browser:{},
    osB: {},
    osBV:{},
    thickness: {},
    units: {},
    partner: {},
    posts: {
      loads: 0,
      unique: 0,
      over2: 0,
      over5: 0,
    },
  };

  const loadsHydrated = {};
  if(Array.isArray(loads)){
    loads.forEach(s=>{
      loadsHydrated[`${s.id}`] = convertObjectKeyCase(s,'cC');
    });
  }
	
  const sharesHydrated = {};
  if(Array.isArray(loads)){
    loads.forEach(s=>{
      sharesHydrated[`${s.id_share}`] = convertObjectKeyCase(s,'cC');
    });
  }
  
  const usersByConsentDate = {};
	
  if(Array.isArray(layers)){

    layers.forEach(l=>{
      const lCamel = convertObjectKeyCase(l);
      const thisShare = sharesHydrated[`${l.id_share}`] || {};
      if(!Array.isArray(thisShare.layers)){
        thisShare.layers = [];
      }
      thisShare.layers.push(lCamel);
      const thisLoadId = thisShare.id;
      const thisLoad = loadsHydrated[`${thisLoadId}`] || {};
      if(!Array.isArray(thisLoad.layers)){
        thisLoad.layers = [];
      }
      thisLoad.layers.push(lCamel);
    });
  }

  let countAnonymous = 0;
  for(let idShare in loadsHydrated){
    const s = loadsHydrated[idShare];
    const ls = s.localStorage || {};

    const loadTs = isValidDate(s.timestampCreated) ? s.timestampCreated : convertStringToTimestamp(s.timestampCreated);
    const loadTString = isValidDate(loadTs) ? loadTs.getTime() : '0';

    if(!usersByConsentDate[`${ls.consented}-id-${s.idUser}`]){
      usersByConsentDate[`${ls.consented}-id-${s.idUser}`] = {};
    }
    if(!usersByConsentDate[`${ls.consented}-id-${s.idUser}`][loadTString]){
      usersByConsentDate[`${ls.consented}-id-${s.idUser}`][loadTString] = ls;
    }
    if(!ls.consented){
      countAnonymous += 1;
    }
  }

  const users = {};
  let userCount = 0;
  for(let consentTime in usersByConsentDate){
    const times = usersByConsentDate[consentTime];
    let highestTime = 0;
    let mostRecentLs = {};
    for(let time in times){
      const thisLs = times[time];
      const int = parseInt(time, 10);
      if(int > highestTime){
        highestTime = int;
        mostRecentLs = thisLs;
      }
    }
    users[`${highestTime}`] = mostRecentLs;
    userCount += 1;
  }

  data.users = users;
  data.usersByConsentDate = usersByConsentDate;
  data.countAnonymous = {countAnonymous};
  data.userCount = {userCount};

  for(let idShare in loadsHydrated){
    const s = loadsHydrated[idShare];
    const ls = s.localStorage || {};

    const loadTs = isValidDate(s.timestampCreated) ? s.timestampCreated : convertStringToTimestamp(s.timestampCreated);
    const loadTString = isValidDate(loadTs) ? loadTs.getTime() : '0';

    const dt = s.detailType; // typical
    const dpt = s[dt]; // gr

    const applicableLayers = 
      Array.isArray(s.layers) ?
        s.layers.filter(l=>l.dpt === dpt).map(l=>convertObjectKeyCase(l,'cC')) : [];

    let fullThickness = 0;

    applicableLayers.forEach((layer,i)=>{
      const lyr = layer.lyr;
      const thisProduct = products[`${layer.idProduct}`] || {};

      if(typeLyrs[lyr]){
        if(!data[lyr]){
          data[lyr] = {};
        }
        const typeProduct = thisProduct.typeProduct;
        if(!data[lyr][typeProduct]){
          data[lyr][typeProduct] = 1;
        } else {
          data[lyr][typeProduct] += 1;
        }
      }

      if(thicknessLyrs[lyr]){
        if(!data[lyr]){
          data[lyr] = {};
        }
        const thicknessFrom = `${layer.thicknessMm}`;
        const thicknessTo = isPrimitiveNumber(layer.thicknessMm) ?
				  `${layer.thicknessMm}` : '0' ;
        if(!data[lyr][thicknessFrom]){
          data[lyr][thicknessTo] = 1;
        } else {
          data[lyr][thicknessTo] += 1;
        }

        if(isPrimitiveNumber(layer.thicknessMm)){
          fullThickness += layer.thicknessMm;
        }
      }
    });

    if(!data.thickness[`${fullThickness}`]){
      data.thickness[`${fullThickness}`] = 1;
    } else {
      data.thickness[`${fullThickness}`] += 1;
    }

    const namePartner = s.nameSystem || s.namePartner;
    if(!data.partner[namePartner]){
      data.partner[namePartner] = 1;
    } else {
      data.partner[namePartner] += 1;
    }
  
    if(s.os){
      if(!data.os[s.os]){
        data.os[s.os] = 1;
      } else {
        data.os[s.os] += 1;
      }
    }

    if(s.browserName){
      if(!data.browser[s.browserName]){
        data.browser[s.browserName] = 1;
      } else {
        data.browser[s.browserName] += 1;
      }

      if(!data.osB[`${s.os}-${s.browserName}`]){
        data.osB[`${s.os}-${s.browserName}`] = 1;
      } else {
        data.osB[`${s.os}-${s.browserName}`] += 1;
      }
    }

    if(s.browserVersion){
      if(!data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`]){
        data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`] = 1;
      } else {
        data.osBV[`${s.os}-${s.browserName}-${s.browserVersion}`] += 1;
      }
    }

    const loadCountKeys = [
      'idUser',
      'company',
      'detailType',
    ];

    loadCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = 
				k === 'idUser' && s.idUser ?
				  `${s.firstName} ${s.lastName}` :
				  k === 'idUser' ?
				    'unknown' :
				    s[k];
      if(!data[k][`${value}`]){
        data[k][`${value}`] = 1;
      } else {
        data[k][`${value}`] += 1;
      }
    });

    const partCountKeys = [
      'border',
      'edgeB',
      'edgeP',
      'edgeT',
      'typical',
      'middle',
      'overlay',
      'perimeter',
    ];

    partCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = s[k];
      if(!data[k][value]){
        data[k][value] = 1;
      } else {
        data[k][value] += 1;
      }
    });
    
    const lsCountKeys = [
      'units',
      'model',
      'modelCountry',
      'modelLocation',
      'profileEtModel',
      'userHistory',
      'userStats',
    ];

    lsCountKeys.forEach(k=>{
      if(!data[k]){
        data[k] = {};
      }
      const value = ls[k];
      if(!data[k][value]){
        data[k][value] = 1;
      } else {
        data[k][value] += 1;
      }
    });

    // if this load is the most recent in the batch for this user
    if(users[loadTString]){
      for(let k in ls){
        const value = ls[k];
        if(k.slice(0,5) === 'post_'){
          const count = parseInt(value, 10);
          data.posts.loads += 1;
          data.posts.unique += count;
          if(count > 2){
            data.posts.over2 += 1;
          }
          if(count > 5){
            data.posts.over5 += 1;
          }
        }
      }
    }

    const userType = // each nests the latter
    internalCompanies[s.company] ?
      'internal':
      s.idUser || ls.authToken || ls.userAccountConsent ?
        'auth' : 
        s.userHistory ?
          'history' :
          s.userStats ?
            'stats':
            'anonymous';

    if(users[loadTString] || userType === 'anonymous'){
      if(!data.userType[userType]){
        data.userType[userType] = 1;
      } else {
        data.userType[userType] += 1;
      }
    }

  }
  data.loadsHydrated = loadsHydrated;

  return data;

};

const createDetailsLoadsReport = (loads, layers) => {
  const data = formatDetailsLoadsData(loads, layers);
  const report = {};
  const userKeys = [

  ];
  const lyrKeys = [

  ];
  return data;

};

const formatEtData = () => {
  return {};
};

const createEtReport = () => {
  return formatEtData();
};

const formatDetentionData = () => {
  return {};
};

const createDetentionReport = () => {
  return formatDetentionData();
};

// @@@@@@@@@@@@@@@ ENDPOINTS @@@@@@@@@@@@@@@@@@

router.get('/', (req,res)=>{
  const foundHack = hasSql(req.body)||hasSql(req.params.path)||hasSql(req.query);
  if(foundHack){
    return handleAttemptedHack('GET/api/details/traffic',req,res,foundHack);
  }
  const {
    type,
    s0,s1,s2,s3,s4,
    e0,e1,e2,e3,e4,
  } = req.query;
  const startTimestamp = new Date(s0,s1||0,s2||1,s3||0,s4||0);
  const endTimestamp   = new Date(e0,e1||0,e2||1,e3||0,e4||0);
  const startTime = convertTimestampToString(startTimestamp, 'd t noz');
  const endTime   = convertTimestampToString(endTimestamp, 'd t noz');
  
  const createWhere = table => {
    return `${table}.timestamp_created >= '${startTime}' and 
		${table}.timestamp_created <= '${endTime}';`;
    // return `(${table}.id_user <> 1 or ${table}.id_user is null) and 
    // (${table}.id_user <> 12 or ${table}.id_user is null) and 
    // (${table}.remote_address <> '::1' or ${table}.remote_address is null) and
    // ${table}.timestamp_created >= '${startTime}' and 
    // ${table}.timestamp_created <= '${endTime}';`;
  };

  const getLogsSql = 
	
  type === 'details-shares' ?
    `select details_shares.id, 
      systems.name_partner, systems.name_system, id_share, 
      details_shares.timestamp_created,
      detail_type,
      typical, border, middle, perimeter, overlay, edge_t, edge_p, edge_b,
      os, browser_name, browser_version, 
      remote_address, local_storage,
      id_user, users.company, users.first_name, users.last_name
      from details_shares 
      left join systems on details_shares.id_system = systems.id
      left join users on details_shares.id_user = users.id
      where ${createWhere('details_shares')}` :
		
    type === 'details-loads' ?
      `select details_shares_loads.id, details_shares_loads.id, details_shares_loads.id_share,
        systems.name_partner, systems.name_system, 
        details_shares_loads.timestamp_created, details_shares.timestamp_created,  
        details_shares.detail_type,
        details_shares.typical, details_shares.border, details_shares.middle, details_shares.perimeter, details_shares.overlay, details_shares.edge_t, details_shares.edge_p, details_shares.edge_b,
        details_shares_loads.os, details_shares_loads.browser_name, details_shares_loads.browser_version, 
        details_shares_loads.remote_address, details_shares_loads.local_storage,
        details_shares_loads.id_user, users.company, users.first_name, users.last_name
        from details_shares_loads 
        left join users on details_shares_loads.id_user = users.id
        left join details_shares on details_shares_loads.id_share = details_shares.id_share
        left join systems on details_shares.id_system = systems.id
        where ${createWhere('details_shares_loads')}` : 
				
      type === 'et' ? 
        `where ${createWhere('et_models_loads')}` :

        '';

  let logs, layers;

  return knex.raw(getLogsSql)
    .then(found=>{
      logs = validateRawKnex(found, getLogsSql);
      if(!Array.isArray(logs)) {
        throw {
          message: `No logs found using ${getLogsSql}`,
        };
      }
      if(type === 'details-loads'){
        logs.forEach(s=>{
          if(s.id_share === 'default'){
            s.id_share = defaultShareId;
          }
        });
      }
      return;
    })
    .then(()=>{
      if(type === 'details-loads' ||
			  type === 'details-shares'){
        const shareIds = getShareIds(logs, type);

        const getLayersSql = `select * from details_shares_layers where id_share in ('${shareIds.join('\', \'')}')`;
        return knex.raw(getLayersSql)
          .then(found=>{
            layers = validateRawKnex(found, getLayersSql);
            if(!Array.isArray(layers)) {
              throw {
                message: `No layers found using ${getLayersSql}`,
              };
            }
            return;
          }); 
      }
      return;

    })
    .then(()=>{
      const data = 
        type === 'details-loads' ?
          createDetailsLoadsReport(logs,layers) : 
          type === 'details-shares' ?
            createDetailsSharesReport(logs,layers) : 
            type === 'et-loads' ?
              createEtReport(logs) : 
              type === 'detention' ?
                createDetentionReport(logs) :
                {};

      return res.status(200).json(data);

    })
    .catch(err=>{
      respondToError(err, res);
    });

});

module.exports = {
  router,
};