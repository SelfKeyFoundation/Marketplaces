module.exports = function(app) {
  const db = require(app.get('app') + "/lib/database.js")(app);
  const TABLE = 'investments';

  module.getAll = function() {
    return new Promise((resolve, reject) => {
      db.connection.query(`SELECT * FROM ${TABLE}`).then((results) => {
        //let entries = new Map();
        //results.forEach((item) => { });
        resolve(results);
      }).catch(function(err) { return reject(err); });
    });
  }


  module.deleteAll = function() {
    return new Promise((resolve, reject) => {
      db.connection.query(`DELETE FROM ${TABLE}`).catch((err) => { return reject(err); }).then(_ => { resolve(); });
    });
  }

  module.insert = function(json) {
    return new Promise((resolve, reject) => {
      db.connection.query(`INSERT INTO ${TABLE} VALUES (?)`, json).then((results) => {
        resolve(results);
      }).catch((err) => { return reject(err); });
    });
  }

  return module;
}