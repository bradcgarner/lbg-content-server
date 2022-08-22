'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const ContentSchema = mongoose.Schema({
  content:               { type: Object },
  level2:                { type: String },
  site:                  { type: String },
});

ContentSchema.methods.apiRepr = function () {
  return {
    content:            this.content,
    level2:             this.level2,
    site:               this.site,
    id:                 this._id, // system-assigned
  };
};

const Content = mongoose.models.Content || mongoose.model('Content', ContentSchema);

module.exports = { Content };