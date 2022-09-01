'use strict';

const { publicSystemsObject } = require('../keys/data');

const createProductHash = idSystem => {
  const productHash = {};
  const system = publicSystemsObject[`${idSystem}`] || {};
  for(let lyr in system){
    if(system[lyr] && Array.isArray(system[lyr].productOptions) &&
      system[lyr].productOptions[0]){
      system[lyr].productOptions.forEach(product=>{
        productHash[`${product.idProduct}`] = product;
      });
    }
  }
  return productHash;
};

module.exports = {
  createProductHash,
};