'use strict';
const { 
  convertCcToSc,
  formatObjectForKnex } = require('conjunction-junction');
const knex              = require('../db-sql');
const logger            = require('log123').createLogger('./routers/traffic.log');

const getIpAddr = req => {
  if(!req){
    // logger.error('no request');
    return 'no request';
  }
  const header = 
  typeof req.header !== 'function' ? req.header('x-forwarded-for') : null;
  const remoteAddress = req.connection ? req.connection.remoteAddress : null;
  return {remoteAddress,header};
};

const logProjectTraffic = trafficInfo => {
  const simpleKeys = [
    'remoteAddress',
    'header',
    'id',
    'endpoint',
    'whichList',
    'idProject',
    'idReviewer',
    'query',
    'projectPath',
    'newPath',
    'requestedEmails',
    'permissions',
    'browser',
  ];
  const projectToLog = {project_path:'0'}; // only overwritten if a new one is supplied (which should always be true), but this prevents failure of sql query
  let areasToLog = [];

  simpleKeys.forEach(k=>{
    if(trafficInfo[k]){
      if(k==='id'){
        projectToLog.id_user = trafficInfo.id;
      } else if(k==='permissions'){
        projectToLog.user_permissions = trafficInfo.permissions;
      } else if(k==='query'){
        projectToLog[k] = JSON.stringify(trafficInfo[k]);
      } else if(k==='browser'){
        const browser = trafficInfo.browser || {};
        projectToLog.browser_name = browser.name;
        projectToLog.browser_version = browser.version;
        projectToLog.os = browser.os;
      } else {
        projectToLog[convertCcToSc(k)] = trafficInfo[k];
      }
    }
  });

  if(trafficInfo.inputFlat){
    const flat = trafficInfo.inputFlat;
    // logger.info('trafficInfo.inputFlat',trafficInfo.inputFlat);
    const f = flat.f || {};
    const a = Array.isArray(flat.a) ? flat.a : [];
    const c = flat.c || {};
    projectToLog.areas_length = a.length;
    const flatKeys = [
      'idVersion',
      'projectPath',
      'antePctF18',
      'targetMaxdrLSHa',
      'stormVolumeMm',
      'stormDurationMinutes'];
    flatKeys.forEach(k=>{
      if(f[k]){
        projectToLog[convertCcToSc(k)] = f[k];
      }
    });
    const comboKeys = [
      'sizeM2',
      'drains',
      'dEdgeMm',
      'storageDetL',
      'storageRetL'];
    comboKeys.forEach(k=>{
      if(c[k]){
        projectToLog[convertCcToSc(k)] = c[k];
      }
    });
    areasToLog = a.map(area=>{
      const areaToLog = {};
      const areaKeys = [
        'detailPartType',
        'profileCode',
        'idSystem',
        'slopePct',
        'mm' ];
      areaKeys.forEach(k=>{
        if(area[k]){
          areaToLog[convertCcToSc(k)] = area[k];
        }
      });
      if(area.id){
        areaToLog.id_area = area.id;
      }
      return areaToLog;
    });
    
  }
  if(trafficInfo.inputStorm){
    // logger.info('trafficInfo.inputStorm',trafficInfo.inputStorm);
    const stormKeys = [ 
      'idShape',
      'name'
    ];
    stormKeys.forEach(k=>{
      if(trafficInfo.inputStorm[k]){
        projectToLog[convertCcToSc(k)] = trafficInfo.inputStorm[k];
      }
    });
  }
  // logger.info(projectToLog);
  // logger.info(areasToLog);

  const formattedProjectToLog = formatObjectForKnex(projectToLog, {type: 'raw'});
  const formattedAreasToLog = areasToLog.map(area=>formatObjectForKnex(area, {type: 'raw'}));
  
  if(trafficInfo.ls){
    formattedProjectToLog.ls = `'${JSON.stringify(trafficInfo.ls)}'`;
  }
  const projectFields = [];
  const projectValues = [];
  for(let field in formattedProjectToLog){
    projectFields.push(field);
    projectValues.push(formattedProjectToLog[field]);
  }

  const alreadyHasIdProject = !!formattedProjectToLog.id_project;
  const idProjectField = alreadyHasIdProject ? '' : 'id_project, ';
  const idProjectValue = alreadyHasIdProject ? '' : `(select id from projects where project_path = ${formattedProjectToLog.project_path}), `;

  const projectSql = `insert into projects_traffic (
    ${idProjectField}
    ${projectFields.join(', ')}) values (
    ${idProjectValue} 
    ${projectValues.join(', ')});`;

  const areasSql = formattedAreasToLog.map(area=>{
    const areaFields = [];
    const areaValues = [];
    for(let field in area){
      areaFields.push(field);
      areaValues.push(area[field]);
    }
    const idProjectValue = alreadyHasIdProject ? `${formattedProjectToLog.id_project},` : `(select id from projects where project_path = ${formattedProjectToLog.project_path}), `;
  
    const areaSql = `insert into projects_areas_traffic (
      id_project,
      id_user, 
      ${areaFields.join(', ')}
      ) values (
      ${idProjectValue}
      ${formattedProjectToLog.id_user},
      ${areaValues.join(', ')}
      );`;

    return areaSql;
  });

  // logger.info(projectSql);
  // logger.info(areasSql);
  return knex.raw(`${projectSql} ${areasSql.join(' ')}`)
    .then(()=>{
      return;
    })
    .catch(err=>{
      logger.error(err);
    });

};

const logEtModelTraffic = tracking => {
  const simpleKeys = [
    'remoteAddress',
    'header',
    'endpoint',
    'location_name',
    // 'isLocal',
    'priorRuns',
    // 'hasAuthToken',
    'browser_name',
    'browser_version',
    'os',
    'profileString',
    'origin',
    'idUser',
    'mapCenter',
    'share',
    'irrigationEnabled',
    'hasDomestic',
    'hasCistern',
    'cisternMaxL',
    'collectFromGrM2',
    'collectFromRoofM2',
    'applicationRate',
  ];

  const modelToLog = {};

  simpleKeys.forEach(k=>{
    if(tracking[k]){
      modelToLog[convertCcToSc(k)] = tracking[k];
    }
  });

  const formattedModelToLog = formatObjectForKnex(modelToLog, {type: 'raw'});
  const modelFields = [];
  const modelValues = [];
  for(let field in formattedModelToLog){
    modelFields.push(field);
    modelValues.push(formattedModelToLog[field]);
  }

  const modelerSql = `insert into et_models_traffic (
    ${modelFields.join(', ')}) values (
    ${modelValues.join(', ')}
  );`;

  return knex.raw(modelerSql)
    .then(()=>{
      return;
    })
    .catch(err=>{
      logger.error(err);
    });
};


module.exports = {
  getIpAddr,
  logProjectTraffic,
  logEtModelTraffic,
};