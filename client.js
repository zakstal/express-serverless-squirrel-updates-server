var ReactDOM = require('react-dom');
var React = require('react');
// var routes = require('./routes/routes.jsx');
// var Redux = require('redux');
// var Provider = require('react-redux').Provider;

// function reducer(state) { return state; }

// var store = Redux.createStore(reducer, window.PROPS);
var Index = require('./src/reactTemplates/index.jsx');
var Releases = require('./src/reactTemplates/Releases.jsx');
const releaseEl = (<Releases/>)
ReactDOM.render(
    <Index>
        {releaseEl}
    </Index>, document
);
