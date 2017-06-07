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

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/BlogList.js';


var BlogList = function (_Component) {
  (0, _inherits3.default)(BlogList, _Component);

  function BlogList() {
    (0, _classCallCheck3.default)(this, BlogList);

    return (0, _possibleConstructorReturn3.default)(this, (BlogList.__proto__ || (0, _getPrototypeOf2.default)(BlogList)).apply(this, arguments));
  }

  (0, _createClass3.default)(BlogList, [{
    key: 'render',
    value: function render() {

      var renderPost = function renderPost(post, index) {
        return _react2.default.createElement(_Post2.default, { key: index, post: post, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Latest Posts'), this.props.posts.map(renderPost), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, '\n          h2 { \n            font-weight: 300;\n            text-align:center;\n            margin: 60px auto;\n            border-bottom: 1px solid #666;\n            max-width: 30%;\n            padding-bottom: 20px;\n          }\n        '));
    }
  }]);

  return BlogList;
}(_react.Component);

exports.default = BlogList;