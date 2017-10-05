const express = require('express');
const router  = express.Router();
const debug   = require('debug')('app');
const airtable = require('airtable');

const PATH    = 'admin/';
const LAYOUT  = 'layouts/admin';
const TABLE   = 'airtable';

router.get('/', async (req, res, next) => {
  const app = req.app;
  const dbconfig = require(app.get('root') + '/app/config/database.js')[process.env.NODE_ENV || 'development'];
  const atconfig = require(app.get('root') + '/app/config/airtable.js')[process.env.NODE_ENV || 'development'];

  res.render('admin/index', {
    title: 'Admin',
    dbconfig: dbconfig,
    atconfig: atconfig,
    t: false,
    layout: LAYOUT
  });
});

router.post('/sync/passports', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Data', 'Fees', 'Visa_free_relevant_countries'];
  const tran_tables = ['EN', 'ES', 'AR', 'CN', 'RU', 'VN', 'JP', 'Translation_countries', 'Translation_kyc_docs', 'Translation_benefits', 'Translation_common', 'Translation_summary_descriptions']
  const base_key = 'app1SKNr9sRAsjN7T';

  await Data.createTables('passports', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('passports', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('passports', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync table completed');
});

router.post('/sync/physicalassets', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Bas'];
  const tran_tables = []
  const base_key = 'app8ooLA1AkZL9nCE';

  await Data.createTables('physical_assets', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('physical_assets', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('physical_assets', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Physical Assets completed');
});

router.post('/sync/digitalassets', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Assets', 'Old_exchanges', 'Exchanges', 'Wallets', 'Bitcoin_debit_cards', 'ICOs'];
  const tran_tables = []
  const base_key = 'appfFUZqVEFQ9VyDf';

  await Data.createTables('digital_assets', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('digital_assets', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('digital_assets', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Digital Assets completed');
});


router.post('/sync/realestate', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Table_1', 'Table_2'];
  const tran_tables = ['ES', 'CN', 'VN', 'AR', 'Translation_common', 'Translation_countries'];
  const base_key = 'app9logwxo5jNQNGI';

  await Data.createTables('real_estate', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('real_estate', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('real_estate', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Real Estate completed');
});



router.post('/sync/incorporations', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Main', 'Corporations', 'LLCs', 'Taxes', 'Foundations', 'Trusts', 'Guarantee'];
  const tran_tables = ['EN', 'Translation_common', 'Translation_explain', 'Translation_descriptions'];
  const base_key = 'appKZnmlZLRvPbCTf';

  await Data.createTables('incorporations', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('incorporations', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('incorporations', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Incorporations completed');
});


router.post('/sync/bankaccounts', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Wallets', 'Banks', 'Retail_Banking', 'Money_Transmission', 'P2P_loans', 'Wealth_Management', 'Investment_Banking', 'Gaming_Casino_Forex' ];
  const tran_tables = [];
  const base_key = 'appOkH1yXJu063eAW';

  await Data.createTables('bank_accounts', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('bank_accounts', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('bank_accounts', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Bank Accounts completed');
});


router.post('/sync/healthinsurance', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const data_tables = ['Overview', 'Medical_benefits', 'Exclusions_and_limitations'];
  const tran_tables = [];
  const base_key = 'appYzZyOqJhkDAmqP';

  await Data.createTables('health_insurance', data_tables, tran_tables);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base(base_key);

  for (t in data_tables) {
    const table = data_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        Data.insert('health_insurance', table, record_in_json);
      });
      fetchNextPage();
    });
  }

  for (t in tran_tables) {
    const table = tran_tables[t];
    await base(table).select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        let lang = table;
        let ref = '';
        if (table.length > 2) {
          ref = record._rawJson.fields.EN;
          lang = table;
        }
        Data.insertTranslations('health_insurance', table, record_in_json, lang, ref);
      });
      fetchNextPage();
    });
  }

  res.status(200).send('Sync tables for Health Insurance completed');
});


router.post('/sync/countries', async (req, res, next) => {
  const app = req.app;
  const Data = require(app.get('root') + "/app/models/data.js")(app);

  Data.createCountries();

  res.status(200).send('Sync table completed');
});

router.post('/sync/translations', async function(req, res, next) {
  const app = req.app;
  const Translation = require(app.get('app') + "/models/translations.js")(app);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base('app1SKNr9sRAsjN7T');

  await Translation.deleteAll();

  await base('Translation (Countries)').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      const key = record._rawJson.fields.EN;
      Translation.insertCommon(key, record_in_json);
    });
    fetchNextPage();
  });

  await base('Translation (KYC docs)').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      const key = record._rawJson.fields.EN;
      Translation.insertCommon(key, record_in_json);
    });
    fetchNextPage();
  });

  await base('Translation (Benefits)').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      const key = record._rawJson.fields.EN;
      Translation.insertCommon(key, record_in_json);
    });
    fetchNextPage();
  });

  await base('Translation (commonly used words)').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      const key = record._rawJson.fields.EN;
      Translation.insertCommon(key, record_in_json);
    });
    fetchNextPage();
  });

  await base('Summary descriptions').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      const key = record._rawJson.fields.Item;
      Translation.insertSummaries(key, record_in_json);
    });
    fetchNextPage();
  });

  res.status(200).send('Sync table completed');
});


router.post('/sync/visa/:code', (req, res, next) => {
  const app = req.app;
  const code = req.params.code;
  const countries = require(app.get('app') + '/config/countries.js');
  const Country = require(app.get('app') + "/models/countries.js")(app);

  const request = require('request');
  const cheerio = require('cheerio');

  // TODO: move this to an helper
  let url = '';
  for (var key in countries.visa) {
    let u = key;
    let c = countries.visa[key].toLowerCase();

    if (c == code.toLowerCase()) {
      url = u;
      break;
    }
  }

  if (url) {
    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html) {

      // First we'll check to make sure no errors occurred when making the request

      if(!error) {
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);

        $('.wikitable tbody tr').each(function(i, element) {
          var tr = $(this);
          var tds = tr.children('td');

          if (tds.length >= 3) {

            const destCountryCode = Country.getCodeFromName($(tds[0]).text());
            const requirement = $(tds[1]).text();
            const notes = $(tds[2]).text();


            if (destCountryCode) Country.updateVisa(code, destCountryCode, requirement, notes);
          }
        });
      }
    });
  }

  res.status(200).send(url);
});

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.post('/sync/programs', async (req, res, next) => {
  const app = req.app;
  const programs = require(app.get('app') + "/models/programs.js")(app);

  airtable.configure({ apiKey: app.get('airtable_key') });
  const base = airtable.base('app1SKNr9sRAsjN7T');

  await programs.deleteAll();
  await programs.deleteAllDetails();
  await programs.deleteAllFees();

  await base('Data').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insert(record_in_json);
    });
    fetchNextPage();
  });

  await base('Fees').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertFees(record_in_json);
    });
    fetchNextPage();
  });

  await base('EN').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('en', record_in_json);
    });
    fetchNextPage();
  });

  await base('ES').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('es', record_in_json);
    });
    fetchNextPage();
  });

  await base('CN').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('cn', record_in_json);
    });
    fetchNextPage();
  });

  await base('RU').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('ru', record_in_json);
    });
    fetchNextPage();
  });

  await base('VN').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('vn', record_in_json);
    });
    fetchNextPage();
  });

  await base('AR').select({ view: "Grid view" }).eachPage(async (records, fetchNextPage) => {
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      programs.insertDetails('ar', record_in_json);
    });
    fetchNextPage();
  });

  res.status(200).send('Sync table completed');


    /*let entries = new Map();
    base('Data').select({ view: "Grid view" }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        programs.insert(record_in_json).then((data) => { console.log("insert ok"); })
      });

      fetchNextPage();

    }, function done(error) {
      if (error) { console.log(error); next(error); }

      programs.deleteAllDetails().then(_ => {

      });


      res.status(200).send('Sync table completed');
    });
  }).catch((reason) => { res.status(500).send(reason); });*/


});

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.post('/sync/investments', (req, res, next) => {
  const app = req.app;
  const investments = require(app.get('app') + "/models/investments.js")(app);

  investments.deleteAll().then(_ => {

    airtable.configure({ apiKey: app.get('airtable_key') });
    const base = airtable.base('app9logwxo5jNQNGI');

    let entries = new Map();
    base('Table 1').select({ view: "Main View" }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        let record_in_json = JSON.stringify(record._rawJson);
        investments.insert(record_in_json).then((data) => { console.log("insert ok"); })
      });

      fetchNextPage();

    }, function done(error) {
      if (error) { console.log(error); next(error); }
      res.status(200).send('Sync table completed');
    });
  }).catch((reason) => { res.status(500).send(reason); });
});


router.post('/sync/assets', (req, res, next) => {
  const app = req.app;
  const db = require(app.get('app') + "/lib/database.js")(app);

  // Delete existing data
  db.connection.query('DELETE FROM assets').catch(function(err) { return next(err); });

  // Sync
  airtable.configure({ apiKey: app.get('airtable_key') });
  // Assets table
  const base = airtable.base('appfFUZqVEFQ9VyDf');

  let entries = new Map();


  // TODO: exchanges and wallets
  base('Assets').select({
    // Selecting the first 3 records in Main View:
    // maxRecords: 6,
    view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);

      db.connection.query("insert into assets values (?)", record_in_json).then((results) => {
        console.log("insert ok");
      }).catch(function(err) {
        return next(err);
      });

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, function done(error) {
    if (error) { console.log(error); next(error); }
    res.status(200).send('Sync assets table completed');
  });
});

router.post('/sync/exchanges', (req, res, next) => {
  const app = req.app;
  const db = require(app.get('app') + "/lib/database.js")(app);

  // Delete existing data
  db.connection.query('DELETE FROM exchanges').catch(function(err) { return next(err); });

  // Sync
  airtable.configure({ apiKey: app.get('airtable_key') });
  // Assets table
  const base = airtable.base('appfFUZqVEFQ9VyDf');

  let entries = new Map();


  // TODO: exchanges and wallets
  base('Exchanges').select({
    // Selecting the first 3 records in Main View:
    // maxRecords: 6,
    view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);
      console.log(record._rawJson);
      console.log(record_in_json);

      db.connection.query("insert into exchanges values (?)", record_in_json).then((results) => {
        console.log("insert ok");
      }).catch(function(err) {
        return next(err);
      });

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, function done(error) {
    if (error) { console.log(error); next(error); }
    res.status(200).send('Sync Exchanges table completed');
  });
});

router.post('/sync/wallets', (req, res, next) => {
  const app = req.app;
  const db = require(app.get('app') + "/lib/database.js")(app);

  // Delete existing data
  db.connection.query('DELETE FROM wallets').catch(function(err) { return next(err); });

  // Sync
  airtable.configure({ apiKey: app.get('airtable_key') });
  // Assets table
  const base = airtable.base('appfFUZqVEFQ9VyDf');

  let entries = new Map();


  // TODO: exchanges and wallets
  base('wallets').select({
    // Selecting the first 3 records in Main View:
    // maxRecords: 6,
    view: "Main View"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      let record_in_json = JSON.stringify(record._rawJson);

      db.connection.query("insert into wallets values (?)", record_in_json).then((results) => {
        console.log("insert ok");
      }).catch(function(err) {
        return next(err);
      });

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, function done(error) {
    if (error) { console.log(error); next(error); }
    res.status(200).send('Sync wallets table completed');
  });
});

module.exports = router;
