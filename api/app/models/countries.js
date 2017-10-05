module.exports = function(app) {
  const db = require(app.get('app') + "/lib/database.js")(app);

  module.getAll = async () => {
    const results = await db.connection.query("SELECT * FROM countries");
    return results;
  }

  module.getByCode = async (code) => {
    const results = await db.connection.query('SELECT * FROM countries WHERE code = ?', code);
    return results[0];
  }

  module.getInfoByCode = async (code) => {
    const results = await db.connection.query('SELECT data from country_info WHERE countryCode = ?', code);
    return results[0] ? JSON.parse(results[0]['data']) : {};
  }

  module.getAllVisaData = async () => {
    const results = await db.connection.query('SELECT * FROM visas');
    return results;
  }

  module.getVisaFreeCountries = async (code) => {
    const results = await db.connection.query('SELECT visaCountryCode FROM visas WHERE countryCode = ? AND visaType = ?', [code, 'not required']);
    return results;
  }

  module.updateVisa = async (code, destCountryCode, requirement, notes) => {
    const type = module.getVisaType(requirement);
    await db.connection.query("DELETE FROM visas WHERE (countryCode = ? AND visaCountryCode = ?)", [code, destCountryCode]);
    await db.connection.query("INSERT INTO visas (countryCode, visaCountryCode, visaText, visaType, visaNotes) VALUES (?, ?, ?, ?, ?)", [code, destCountryCode, requirement, type, notes]);
  }

  module.getCodeFromName = (name) => {
    const countries = require(app.get('app') + '/config/countries.js');

    let countryCode = false;
    for (var key in countries.codes) {
      let c = key;
      let n = countries.codes[key].toLowerCase().trim();
      if (n == name.toLowerCase().trim()) {
        countryCode = c;
        break;
      }
    }

    return countryCode;
  }

  module.getVisaType = (text) => {
    text = text.toLowerCase();
    text = text.trim();

    if (text.indexOf('visa required') != -1)
      return 'required';

    if (text.indexOf('visa not required') != -1)
      return 'not required';

    if (text.indexOf('visa free') != -1)
      return 'not required';

    if (text.indexOf('on arrival') != -1)
      return 'not required';

    if (text.indexOf('electronic travel authorization') != -1)
      return 'not required';

    if (text.indexOf('evisa') != -1)
      return 'not required';

    if (text.indexOf('e-visa') != -1)
      return 'not required';

    if (text.indexOf('evisitor') != -1)
      return 'not required';

    if (text.indexOf('electronic travel authority') != -1)
      return 'not required';

    if (text.indexOf('online reciprocity fee') != -1)
      return 'not required';

    if (text.indexOf('permit on arrival') != -1)
      return 'not required';

    if (text.indexOf('european union') != -1)
      return 'not required';

    if (text.indexOf('european economic area') != -1)
      return 'not required';

    if (text.indexOf('visa de facto required') != -1)
      return 'required';

    if (text.indexOf('tourist card required') != -1)
      return 'required';

    if (text.indexOf('electronic authorization system') != -1)
      return 'required';

    if (text.indexOf('unlimited access') != -1)
      return 'not required';

    if (text.indexOf('freedom of movement') != -1)
      return 'not required';

    // Default
    return 'required';
  }

  return module;
}