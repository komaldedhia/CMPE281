var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : String,
    type: String
    },
    { collection: 'furniture' });

module.exports = mongoose.model('furniture', userSchema);