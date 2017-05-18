'use strict';

var _BadRequestError = require('../errors/BadRequestError');

var _BadRequestError2 = _interopRequireDefault(_BadRequestError);

var _github = require('../components/github');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var basePath = process.env.NODE_ENV === 'production' ? process.env.basePath : '';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Index = require('../reactTemplates/index');
var Releases = require('../reactTemplates/Releases');


/* GET home page. */
router.get('/', function (req, res, next) {
    var releaseEl = React.createElement(Releases, null);
    var html = ReactDOMServer.renderToString(React.createElement(
        Index,
        null,
        releaseEl
    ));
    res.send(html);
});

// TODO put in api file
router.get('/api/all-releases', function (req, res, next) {
    (0, _github.getAllReleases)().then(function (releases) {
        res.jsonp(releases);
    }).catch(function (err) {
        return console.error('error in index.js', err);
    });
});

// TODO put in api file
router.get('/api/get-public-release', function (req, res, next) {
    var url = decodeURI(req.query.url);
    console.log('this is theurl', url);
    (0, _github.getPublicDownloadUrl)(url).then(function (result) {
        // returns pubic download url
        console.log("result***********", result);
        res.jsonp(result);
    }).catch(function (err) {
        return console.error('error in index.js', err);
    });
});

module.exports = router;