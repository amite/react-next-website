'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Banner = require('../components/Banner');

var _Banner2 = _interopRequireDefault(_Banner);

var _BlogList = require('../components/BlogList');

var _BlogList2 = _interopRequireDefault(_BlogList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Blog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = { posts: [] }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Blog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'My Blog' }, _react2.default.createElement('h1', null, 'Welcome To My Blog'), _react2.default.createElement(_Banner2.default, { img: 'sample-blog-image.jpg' }), _react2.default.createElement('h3', null, 'At the heart of great content is powerful writing. If you don\u2019t consider yourself a writer or you\u2019re just starting out, we\u2019ve got you covered.'), _react2.default.createElement('p', null, 'The free information on our Copyblogger blog will help you get started mastering content marketing so you can use it in your own business, or for a client.'), _react2.default.createElement(_BlogList2.default, { posts: this.props.posts }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _ref3, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://jsonplaceholder.typicode.com/posts?_limit=10');

              case 2:
                _ref3 = _context.sent;
                data = _ref3.data;
                return _context.abrupt('return', { posts: data });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;