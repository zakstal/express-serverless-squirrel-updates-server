'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {

  var ravenClient = null;

  if (_config2.default.sentry && _config2.default.sentry.dsn) {
    ravenClient = new _raven2.default.Client(_config2.default.sentry.dsn, {
      release: manifest.version
    });
  }

  app.use((0, _morgan2.default)('common'));
  if (ravenClient) {
    app.use(_raven2.default.middleware.express.requestHandler(ravenClient));
  }

  // app.get('/', asyncHandler(homeCtrl.main));
  app.get('/update/darwin', (0, _utils.asyncHandler)(updateCtrl.darwin));
  app.get('/update/win32/portable', (0, _utils.asyncHandler)(updateCtrl.win32_portable));
  app.get('/update/win32/:file', (0, _utils.asyncHandler)(updateCtrl.win32_file));
  app.get('/update/linux', (0, _utils.asyncHandler)(updateCtrl.linux));
  app.get('/update/:channel/darwin', (0, _utils.asyncHandler)(updateCtrl.darwin));
  app.get('/update/:channel/win32/portable', (0, _utils.asyncHandler)(updateCtrl.win32_portable));
  app.get('/update/:channel/win32/:file', (0, _utils.asyncHandler)(updateCtrl.win32_file));
  app.get('/update/:channel/linux', (0, _utils.asyncHandler)(updateCtrl.linux));
  app.get('/download/mirror/:mirror/latest', (0, _utils.asyncHandler)(downloadCtrl.latestMirror));
  app.get('/download/:platform/latest', (0, _utils.asyncHandler)(downloadCtrl.latest));
  app.get('/stats', (0, _utils.asyncHandler)(statsCtrl.main));
  app.get('/badge/:type.svg', (0, _utils.asyncHandler)(badgeCtrl.main));

  app.use(_utils.errorHandler1);
  if (ravenClient) {
    app.use(_raven2.default.middleware.express.errorHandler(ravenClient));
  }
  app.use(_utils.errorHandler2);

  return app;
};

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _raven = require('raven');

var _raven2 = _interopRequireDefault(_raven);

var _utils = require('./components/utils');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _home = require('./controllers/home');

var homeCtrl = _interopRequireWildcard(_home);

var _update = require('./controllers/update');

var updateCtrl = _interopRequireWildcard(_update);

var _download = require('./controllers/download');

var downloadCtrl = _interopRequireWildcard(_download);

var _stats = require('./controllers/stats');

var statsCtrl = _interopRequireWildcard(_stats);

var _badge = require('./controllers/badge');

var badgeCtrl = _interopRequireWildcard(_badge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }