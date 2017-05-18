var express = require('express');
var router = express.Router();
var basePath = process.env.NODE_ENV === 'production' ? process.env.basePath : '';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Index = require('../reactTemplates/index');
var Releases = require('../reactTemplates/Releases');
import BadRequestError from '../errors/BadRequestError';
import {getAllReleases, getLatestRelease, getPublicDownloadUrl} from '../components/github';

/* GET home page. */
router.get('/', function(req, res, next) {
        const releaseEl = (<Releases />)
        var html = ReactDOMServer.renderToString(
            <Index>
                {releaseEl}
            </Index>
        )
        res.send(html);
});

// TODO put in api file
router.get('/api/all-releases', function(req, res, next) {
    getAllReleases().then(releases => {
        res.jsonp(releases);
    })
    .catch(err => console.error('error in index.js', err))
});


// TODO put in api file
router.get('/api/get-public-release', function(req, res, next) {
    const url = decodeURI(req.query.url);
    console.log('this is theurl', url);
    getPublicDownloadUrl(url).then(result => {
        // returns pubic download url
        res.jsonp(result);
    })
    .catch(err => console.error('error in index.js', err))
});

module.exports = router;
