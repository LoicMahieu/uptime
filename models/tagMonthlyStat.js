var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// main model
var TagMonthlyStat = new Schema({
    name        : String
  , timestamp   : Date
  , count       : Number
  , ups         : Number
  , responsives : Number
  , time        : Number
  , downtime    : Number
});
TagMonthlyStat.index({ name: 1, timestamp: -1 }, { unique: true });
TagMonthlyStat.plugin(require('../lib/lifecycleEventsPlugin'));

module.exports = mongoose.model('TagMonthlyStat', TagMonthlyStat);