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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Index).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            var metaDesc = 'What did you do yesterday? Look in pinger. Pinger pops up from your tray on a semi random interval so you can track how you spend you time.';
            var metaTitle = "Pinger";
            return _react2.default.createElement(
                'html',
                null,
                _react2.default.createElement(
                    'head',
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Pinger'
                    ),
                    _react2.default.createElement('meta', { charset: 'utf-8' }),
                    _react2.default.createElement('meta', { name: 'description', content: metaDesc }),
                    _react2.default.createElement('meta', { property: 'og:title', content: metaTitle }),
                    _react2.default.createElement('meta', { property: 'og:description', content: metaDesc }),
                    _react2.default.createElement('meta', { property: 'og:site_name', content: metaTitle }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
                    _react2.default.createElement('meta', { property: 'og:image', content: '//s3.amazonaws.com/pingerpinger/pingerLogo6.png' }),
                    _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/svg+xml' }),
                    _react2.default.createElement('meta', { property: 'og:image:width', content: '300' }),
                    _react2.default.createElement('meta', { property: 'og:image:height', content: '300' }),
                    _react2.default.createElement('meta', { property: 'twitter:title', content: metaTitle }),
                    _react2.default.createElement('meta', { property: 'twitter:description', content: metaDesc }),
                    _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' }),
                    _react2.default.createElement('link', { rel: 'stylesheet', href: '/stylesheets/style.css' }),
                    _react2.default.createElement('link', { rel: 'shortcut icon', href: '//s3.amazonaws.com/pingerpinger/favicon.ico', type: 'image/x-icon' }),
                    _react2.default.createElement('link', { rel: 'icon', href: '//s3.amazonaws.com/pingerpinger/favicon.ico', type: 'image/x-icon' }),
                    _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '//s3.amazonaws.com/pingerpinger/apple-touch-icon.png' }),
                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '//s3.amazonaws.com/pingerpinger/favicon-32x32.png' }),
                    _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '//s3.amazonaws.com/pingerpinger/favicon-16x16.png' }),
                    _react2.default.createElement('link', { rel: 'manifest', href: '//s3.amazonaws.com/pingerpinger/manifest.json' }),
                    _react2.default.createElement('link', { rel: 'mask-icon', href: '//s3.amazonaws.com/pingerpinger/safari-pinned-tab.svg', color: '#5bbad5' }),
                    _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
                    _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Karla|Khula|Open+Sans|Quicksand|Raleway|Titillium+Web', rel: 'stylesheet' })
                ),
                _react2.default.createElement(
                    'body',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'main-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'main-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'main-header' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement('img', { className: 'main-logo-img', src: '//s3.amazonaws.com/pingerpinger/pingerLogo6.png' }),
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'main-title' },
                                        'Pinger'
                                    ),
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'main-title small' },
                                        'Beta'
                                    )
                                ),
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'main-heading' },
                                    'What did I do yesterday? I\'ll look in pinger.'
                                )
                            ),
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);
    return Index;
}(_react.Component); // var React = require('react');


module.exports = Index;