module.exports = function(app) {
  const db = require(app.get('app') + "/lib/database.js")(app);

  module.getAll = async () => {
    const results = await db.connection.query('SELECT * FROM translations');

    let data = [];
    results.forEach((res) => {
      if (res['common'])
        data[res['ref']] = res['common'];
      else
        data['sum_' + res['ref']] = res['summaries'];
    });
    return data;
  }

  module.deleteAll = async () => {
    await db.connection.query('DELETE FROM translations');
  }

  module.insertCommon = async function(key, json) {
    await db.connection.query("INSERT INTO translations (ref, common) VALUES (?, ?)", [key, json]);
  }

  module.insertSummaries = async function(key, json) {
    await db.connection.query("INSERT INTO translations (ref, summaries) VALUES (?, ?)", [key, json]);
  }

  return module;
}