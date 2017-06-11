'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _PageTitle = require('../components/PageTitle');

var _PageTitle2 = _interopRequireDefault(_PageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = ['I\'m Santa Claus! You\'ll have all the Slurm you can drink when you\'re partying with Slurms McKenzie! And remember, don\'t do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don\'t not do it!', 'You seem malnourished. Are you suffering from intestinal parasites? Okay, I like a challenge. <strong> Dear God, they\'ll be killed on our doorstep!</strong> <em> And there\'s no trash pickup until January 3rd.</em> And until then, I can never die?'];

var pageTitle = 'As an interesting side note, as a head without a body, I envy the dead';

var HomeContent = content.map(function (c, index) {
  return _react2.default.createElement('div', { key: index, className: 'col-sm-6' }, _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: c } }));
});

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'A Home Page' }, _react2.default.createElement(_PageTitle2.default, { title: pageTitle }), _react2.default.createElement(_Banner2.default, { img: 'home-bg.jpg' }), _react2.default.createElement('br', null), HomeContent);
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;