'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var React = require('react');
var Releases = function (_Component) {
    (0, _inherits3.default)(Releases, _Component);

    function Releases() {
        (0, _classCallCheck3.default)(this, Releases);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Releases).apply(this, arguments));
    }

    (0, _createClass3.default)(Releases, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.state = {
                releases: []
            };
            _superagent2.default.get('/api/all-releases').then(function (res) {
                _this2.setState({ releases: res.body });
            });
        }
    }, {
        key: 'getPublicUrl',
        value: function getPublicUrl(url) {
            _superagent2.default.get('/api/get-public-release').query({ url: url }).then(function (res) {
                window.location.href = res.body;
                console.log('result getpulbic url', res.body);
            });
        }
    }, {
        key: 'renderReleases',
        value: function renderReleases(releases) {
            var _this3 = this;

            console.log('releases', releases);
            return releases.map(function (release) {
                var tag_name = release.tag_name,
                    html_url = release.html_url,
                    name = release.name,
                    body = release.body,
                    assets = release.assets;
                // TODO filter release type like in update.js/darwin. assets are filterd by OS type.

                var assetUrl = assets[0].url;
                return _react2.default.createElement(
                    'a',
                    {
                        className: 'releases-item',
                        key: tag_name,
                        onClick: function onClick(e) {
                            e.preventDefault();_this3.getPublicUrl(assetUrl);
                        }
                    },
                    _react2.default.createElement(
                        'p',
                        { className: 'release-version' },
                        tag_name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        body
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // const { releases } = this.props;
            var isState = this.state && this.state.releases;
            var releaseEls = isState ? this.renderReleases(this.state.releases) : null;
            return _react2.default.createElement(
                'section',
                { className: 'releases-container' },
                _react2.default.createElement(
                    'h2',
                    { className: 'heading-1' },
                    'Releases'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'releases-body' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'sub-heading-1' },
                        'Mac'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'releases-mac' },
                        releaseEls
                    )
                )
            );
        }
    }]);
    return Releases;
}(_react.Component);

module.exports = Releases;