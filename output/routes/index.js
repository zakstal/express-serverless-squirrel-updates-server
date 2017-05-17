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
    (0, _github.getAllReleases)().then(function (releases) {
        var releaseEl = React.createElement(Releases, { releases: releases });
        var html = ReactDOMServer.renderToString(React.createElement(
            Index,
            null,
            releaseEl
        ));
        res.send(html);
    }).catch(function (err) {
        return console.error('error in index.js', err);
    });
});

module.exports = router;