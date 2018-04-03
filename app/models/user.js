var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPassword);
  },

  verifyPassword: function(inputPassword, callback) {
    bcrypt.compare(inputPassword, this.get('password'), function(error, isMatch) {
      if (error) callback(error);
      callback(isMatch);
    })
  },

  hashPassword: function() {
    var encrypt = Promise.promisify(bcrypt.hash);
    return encrypt(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  }
});

module.exports = User;