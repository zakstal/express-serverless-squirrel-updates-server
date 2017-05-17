'use strict';

var _github = require('../components/github');

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
        return console.error('error', err);
    });
});

module.exports = router;