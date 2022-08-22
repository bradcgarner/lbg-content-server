'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const InquirieSchema = mongoose.Schema({
  name:             { type: String },
  timestampCreated: { type: String },
  email:            { type: String },
  tel:              { type: String },
  msg:              { type: String },
  site:             { type: String },  
  cc:               { type: String }
});

InquirieSchema.methods.apiRepr = function(){
  return {
    name:  this.name,
    timestampCreated: this.timestampCreated,
    email: this.email,
    tel:   this.tel,
    msg:   this.msg,
    site:  this.site,
    cc:    this.cc,
  };
};

const Inquirie = mongoose.models.Inquirie || mongoose.model('Inquirie', InquirieSchema);

module.exports = { Inquirie };