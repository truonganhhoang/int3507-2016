var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VocabularySchema = new Schema({
  en: String,
  type: String,
  vi: String
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);
