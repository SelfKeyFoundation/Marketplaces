config = {
  development: {
    'api_key': process.env.AIRTABLE_API_KEY,
    'base': process.env.AIRTABLE_BASE,
    'data_tables': process.env.AIRTABLE_DATA_TABLES,
    'translation_tables': process.env.AIRTABLE_TRANSLATION_TABLES,
    'table_key': process.env.AIRTABLE_TABLE_KEY
  },

  production: {
    'api_key': process.env.AIRTABLE_API_KEY,
    'base': process.env.AIRTABLE_BASE,
    'data_tables': process.env.AIRTABLE_DATA_TABLES,
    'translation_tables': process.env.AIRTABLE_TRANSLATION_TABLES,
    'table_key': process.env.AIRTABLE_TABLE_KEY
  }
}

module.exports = config;