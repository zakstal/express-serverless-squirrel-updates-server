var express = require('express');
var router = express.Router();
var basePath = process.env.NODE_ENV === 'production' ? process.env.basePath : '';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Index = require('../reactTemplates/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    var html = ReactDOMServer.renderToString(
        <Index/>
    )
    res.send(html);
});

module.exports = router;
