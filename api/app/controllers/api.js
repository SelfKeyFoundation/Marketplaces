const express = require('express');
const router  = express.Router();
const debug   = require('debug')('app');
const airtable = require('airtable');
const apicache = require('apicache');

const LAYOUT  = 'layouts/api';
let cache = apicache.middleware;

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/passports', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Data', 'Fees', 'Visa_free_relevant_countries'];
  const data = await Data.getData('passports', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/passports/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['EN', 'ES', 'AR', 'CN', 'RU', 'VN', 'JP', 'Translation_countries', 'Translation_kyc_docs', 'Translation_benefits', 'Translation_common', 'Translation_descriptions'];
  const data = await Data.getTranslations('passports', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/physical-assets', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Bas'];
  const data = await Data.getData('physical_assets', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/physical-assets/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = [];
  const data = await Data.getTranslations('physical_assets', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/digital-assets', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Assets', 'Old_exchanges', 'Exchanges', 'Wallets', 'Bitcoin_debit_cards', 'ICOs'];
  const data = await Data.getData('digital_assets', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/digital-assets/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = [];
  const data = await Data.getTranslations('digital_assets', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/real-estate', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Table_1', 'Table_2'];
  const data = await Data.getData('real_estate', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/real-estate/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['ES', 'CN', 'VN', 'AR', 'Translation_common', 'Translation_countries'];
  const data = await Data.getTranslations('real_estate', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/incorporations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Main', 'Corporations', 'LLCs', 'Taxes', 'Foundations', 'Trusts', 'Guarantee'];
  const data = await Data.getData('incorporations', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/incorporations/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['EN', 'Translation_common', 'Translation_explain', 'Translation_descriptions'];
  const data = await Data.getTranslations('incorporations', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/bank-accounts', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Wallets', 'Banks', 'Retail_Banking', 'Money_Transmission', 'P2P_loans', 'Wealth_Management', 'Investment_Banking', 'Gaming_Casino_Forex' ];
  const data = await Data.getData('bank_accounts', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/bank-accounts/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = [];
  const data = await Data.getTranslations('bank_accounts', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/health-insurance', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = ['Overview', 'Medical_benefits', 'Exclusions_and_limitations'];
  const data = await Data.getData('health_insurance', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/health-insurance/translations', cache('5 minutes'), async (req, res, next) => {
  const app = req.app;

  const Data = require(app.get('root') + "/app/models/data.js")(app);

  const tables = [];
  const data = await Data.getTranslations('health_insurance', tables);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


/**
 * --------------------------------------------------------------------
 * title
 * --------------------------------------------------------------------
 * description
 *
*/

router.get('/countries', async (req, res, next) => {
  const app = req.app;

  const Data        = require(app.get('root') + "/app/models/data.js")(app);
  const Country     = require(app.get('root') + "/app/models/countries.js")(app);
  const Translation = require(app.get('root') + "/app/models/translations.js")(app);

  const data = await Promise.all([
    //Data.get(key),
    Country.getAll(),
    //Translation.getAll()
  ]).catch(reason => { res.status(500).send(reason) });

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

router.get('/country/:key', async (req, res, next) => {
  const app = req.app;
  const key = req.params.key;

  const Data        = require(app.get('root') + "/app/models/data.js")(app);
  const Country     = require(app.get('root') + "/app/models/countries.js")(app);
  const Translation = require(app.get('root') + "/app/models/translations.js")(app);

  const data = await Promise.all([
    //Data.get(key),
    Country.getByCode(key),
    //Translation.getAll()
  ]).catch(reason => { res.status(500).send(reason) });

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


module.exports = router;

