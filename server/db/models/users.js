const bookshelf = require('../bookshelf.js');

const User = bookshelf.Model.extend({
  tableName: 'users',
});

module.exports = User;