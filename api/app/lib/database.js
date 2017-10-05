const mysql = require('promise-mysql');
const debug = require('debug')('app');
let pool = false;


module.exports = function(app, db) {
  const config = require(app.get('app') + '/config/database.js')[process.env.NODE_ENV || 'development'];
  pool = pool ? pool : mysql.createPool(config);

  module.config = config;
  module.connection = {
    query: function () {
      const queryArgs = Array.prototype.slice.call(arguments);

      // TODO: support multilple query args
      const queryOptions = {
        sql: queryArgs[0],
        values: queryArgs[1],
        typeCast: function (field, next) {
          if (field.type == 'JSON') { return (JSON.parse(field.string())); }
          return next();
        }
      }
      return pool.query(queryOptions);
    }
 }

  return module;
}