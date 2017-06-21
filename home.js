'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const DemoView = require('./src');

const config = {};

ReactDOM.render(<DemoView {...config} />, document.getElementById('app'));
