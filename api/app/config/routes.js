const countries = require('../controllers/countries.js');
const api       = require('../controllers/api.js');
const admin     = require('../controllers/admin.js');

module.exports = function(app) {
  const site_path = app.settings.site_path;

  app.use('/api', api);
  app.use('/admin', admin);

  // 404 handler
  app.use(function(req, res, next) {
    var err = new Error(`Error not found ${req.url}`);
    err.status = 404;
    next(err);
  });
}
