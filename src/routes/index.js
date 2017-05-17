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
    getAllReleases().then(releases => {
        const releaseEl = (<Releases releases={releases}/>)
        var html = ReactDOMServer.renderToString(
            <Index>
                {releaseEl}
            </Index>
        )
        res.send(html);
    })
    .catch(err => console.error('error in index.js', err))
});

module.exports = router;
