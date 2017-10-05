module.exports = function(app) {
  const db = require(app.get('root') + "/app/lib/database.js")(app);
  const atconfig = require(app.get('root') + '/app/config/airtable.js')[process.env.NODE_ENV || 'development'];

  module.getAll = async () => {
    let tables = atconfig.data_tables.split(',');
    let promises = [];
    for (t in tables) {
      const table = tables[t];
      promises.push(db.connection.query('SELECT * FROM data_' + table))
    }
    const results = await Promise.all(promises);
    let data = {};
    for (t in tables) {
      const table = tables[t];
      data[table] = results[t];
    }
    return data;
  }

  module.get = async (code) => {
    const key_column = atconfig.table_key;
    console.log(atconfig);
    let tables = atconfig.data_tables.split(',');
    let promises = [];
    for (t in tables) {
      const table = tables[t];
      promises.push(db.connection.query('SELECT * FROM data_' + table + ' WHERE data->"$.fields.\\"'+ key_column + '\\"[0]" = \'' + code +'\''));
    }
    const results = await Promise.all(promises);
    let data = {};
    for (t in tables) {
      const table = tables[t];
      data[table] = results[t];
    }
    return data;
  }

  module.deleteAll = async () => {
    const results = await db.connection.query('DELETE FROM data');
  }



  module.getData = async function(airtable, tables) {
    let promises = [];
    for (t in tables) {
      const table = tables[t];
      promises.push(db.connection.query(`SELECT * FROM ${airtable}_D_${table}`))
    }
    const results = await Promise.all(promises);
    let data = {};
    for (t in tables) {
      const table = tables[t];
      data[table] = results[t];
    }
    return data;
  }

  module.getTranslations = async function(airtable, tables) {
    let promises = [];
    for (t in tables) {
      const table = tables[t];
      promises.push(db.connection.query(`SELECT * FROM ${airtable}_T_${table}`))
    }
    const results = await Promise.all(promises);
    let data = {};
    for (t in tables) {
      const table = tables[t];
      data[table] = results[t];
    }
    return data;
  }

  module.insert = async function(airtable, table, json) {
    const results = await db.connection.query(`INSERT INTO ${airtable}_D_${table} VALUES (?)`, json);
  }

  module.insertTranslations = async function(airtable, table, json, lang, ref) {
    const results = await db.connection.query(`INSERT INTO ${airtable}_T_${table} VALUES (?, ?, ?)`, [ref,lang,json]);
  }

  module.createTables = async function(airtable, data_tables, translation_tables) {

    for (t in data_tables) {
      const table = data_tables[t];
      await db.connection.query(`DROP TABLE IF EXISTS ${airtable}_D_${table}`);
      let sqlString = `CREATE TABLE ${airtable}_D_${table} (data json)`;
      await db.connection.query(sqlString);
    }

    for (t in translation_tables) {
      const table = translation_tables[t];
      await db.connection.query(`DROP TABLE IF EXISTS ${airtable}_T_${table}`);
      let sqlString = `CREATE TABLE ${airtable}_T_${table} (ref text, lang text, data json)`;
      await db.connection.query(sqlString);
    }
  }

  module.createCountries = async function(atconfig) {
    const mysql = require('promise-mysql');
    filename = "db/bootstrap_data.sql";
    var fs = require('fs');
    fs.readFile(filename, 'utf8', function(err, data) {
      let config = db.config;
      config['multipleStatements'] = true;
      mysql.createConnection(config).then((conn) => {
        conn.query(data);
      })
    });
  }

  return module;
}