var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {

  },

  verifyPassword: function(password) {
    //TODO: Your code here..
  } 
});

module.exports = User;