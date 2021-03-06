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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      var _props$post = this.props.post,
          id = _props$post.id,
          title = _props$post.title,
          body = _props$post.body;

      return _react2.default.createElement('div', { className: 'post' }, _react2.default.createElement('h3', null, _react2.default.createElement(_link2.default, { href: '/post?id=' + id, as: '/post/' + id }, _react2.default.createElement('a', null, title))), _react2.default.createElement('div', { className: 'post-body' }, _react2.default.createElement('p', null, body)), _react2.default.createElement('style', null, '\n          a { \n            color: #345e82;\n            transition: 0.3s all;\n          }\n\n          a:hover {\n            text-decoration: none;\n            color: grey;\n          }\n        '), _react2.default.createElement('hr', null));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;