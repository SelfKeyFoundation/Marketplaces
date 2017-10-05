module.exports = function(app) {
  const db = require(app.get('app') + "/lib/database.js")(app);

  module.getAll = async () => {
    const results = await db.connection.query('SELECT * FROM programs');
    return results;
  }

  module.getAll = async () => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const results = await db.connection.query('SELECT * FROM programs');
    return results;

  }

  module.getProgram = async (code) => {
    const column = 'program code';
    const results = await db.connection.query('SELECT * FROM programs WHERE data->"$.fields.\\"'+ column + '\\"[0]" = \'' + code +'\'');
    return results[0]['data']['fields'];
  }

  module.getCitizenship = async () => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const results = await db.connection.query('SELECT * FROM programs WHERE data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'Citizenship\'');
    return results;
  }

  module.getResidencies = async () => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const results = await db.connection.query('SELECT * FROM programs WHERE data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'Permanent Residency\' OR data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'Temporary Residency\'');
    return results;
  }

  module.getByType = async (type) => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const results = await db.connection.query('SELECT * FROM programs WHERE data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'' + type + '\' or data->"$.fields.\\"'+ programTypeCol + '\\"[1]" = \'' + type + '\'');
    return results;
  }

  module.getByBestFor = async (type, bestFor) => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const bestForCol = 'best for: employee, investor, entreprenuer, self-employed, retired, company, nil, anyone';
    const results = await db.connection.query('SELECT * FROM programs WHERE (data->"$.fields.\\"'+ bestForCol + '\\"[0]" = \'' + bestFor + '\' or data->"$.fields.\\"'+ bestForCol + '\\"[1]" = \'' + bestFor + '\') AND (data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'' + type + '\' or data->"$.fields.\\"'+ programTypeCol + '\\"[1]" = \'' + type + '\')');
    return results;
  }

  module.getByBenefit = async (type, benefit) => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const benefitCol_1 = 'benefits_citizenship';
    const benefitCol_2 = 'benefits_permanent_residency';
    const benefitCol_3 = 'benefits_temporary_residency';
    const results = await db.connection.query('SELECT * FROM programs WHERE (data->"$.fields.\\"'+ programTypeCol + '\\"[0]" = \'' + type + '\' or data->"$.fields.\\"'+ programTypeCol + '\\"[1]" = \'' + type + '\')');
    return results;
  }

  module.getByCategory = async (type, category) => {
    const programTypeCol = 'Program Type (residency vs. citizenship) ONLY';
    const categoryCol = 'type of category: donation, real estate investment, bonds, business , annual levy, pension';
    const results = await db.connection.query('SELECT * FROM programs WHERE (data->"$.fields.\\"'+ categoryCol + '\\"[0]" = \'' + category + '\' or data->"$.fields.\\"'+ categoryCol + '\\"[1]" = \'' + category + '\' or data->"$.fields.\\"'+ categoryCol + '\\"[2]" = \'' + category + '\' or data->"$.fields.\\"'+ categoryCol + '\\"[3]" = \'' + category + '\')');
    return results;
  }

  module.deleteAll = async () => {
    const results = await db.connection.query('DELETE FROM programs');
  }

  module.insert = async function(json) {
    const results = await db.connection.query("INSERT INTO programs VALUES (?)", json);
  }

  module.deleteAllDetails = async () => {
    const results = await db.connection.query('DELETE FROM program_details');
  }

  module.insertDetails = async function(lang, json) {
    const results = await db.connection.query("INSERT INTO program_details VALUES (?, ?)", [lang, json]);
  }

  module.getTranslatedDetails = async (lang) => {
    const results = await db.connection.query('SELECT data FROM program_details where lang = ?', lang);
    return results;
  }

  module.getTranslatedDetailsForProgramCode = async (lang, code) => {
    const col = 'program_code';
    const results = await db.connection.query('SELECT data FROM program_details where lang = ? AND data->"$.fields.\\"'+ col + '\\"[0]" = \'' + code + '\'', lang);
    if (results[0] && results[0]['data'])
      return results[0]['data']['fields'];
    else
      return [];
  }

  module.deleteAllFees = async () => {
    const results = await db.connection.query('DELETE FROM program_fees');
  }

  module.insertFees = async function(json) {
    const results = await db.connection.query("INSERT INTO program_fees VALUES (?)", [json]);
  }

  module.getFees = async () => {
    const results = await db.connection.query('SELECT data FROM program_fees');
    return results;
  }

  module.getFeesForProgramCode = async (code) => {
    const col = 'program code';
    const results = await db.connection.query('SELECT data FROM program_fees where data->"$.fields.\\"'+ col + '\\"[0]" = \'' + code + '\'');
    if (results[0] && results[0]['data'])
      return results[0]['data']['fields'];
    else
      return [];
  }

  return module;
}