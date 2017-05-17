"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Releases = function (_Component) {
    (0, _inherits3.default)(Releases, _Component);

    function Releases() {
        (0, _classCallCheck3.default)(this, Releases);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Releases).apply(this, arguments));
    }

    (0, _createClass3.default)(Releases, [{
        key: "renderReleases",
        value: function renderReleases(releases) {
            return releases.map(function (release) {
                var tag_name = release.tag_name,
                    html_url = release.html_url,
                    name = release.name,
                    body = release.body;

                return _react2.default.createElement(
                    "a",
                    {
                        className: "releases-item",
                        key: tag_name,
                        href: html_url
                    },
                    _react2.default.createElement(
                        "p",
                        { className: "release-version" },
                        tag_name
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        name
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        body
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var releases = this.props.releases;

            var releaseEls = releases ? this.renderReleases(releases) : null;
            return _react2.default.createElement(
                "section",
                { className: "releases-container" },
                _react2.default.createElement(
                    "h2",
                    { className: "heading-1" },
                    "Releases"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "releases-body" },
                    _react2.default.createElement(
                        "h3",
                        { className: "sub-heading-1" },
                        "Mac"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "releases-mac" },
                        releaseEls
                    )
                )
            );
        }
    }]);
    return Releases;
}(_react.Component); // var React = require('react');


module.exports = Releases;