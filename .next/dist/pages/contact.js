'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _ContactForm = require('../components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/pages/contact.js?entry';

var Contact = function (_Component) {
  (0, _inherits3.default)(Contact, _Component);

  function Contact() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: true,
      question: true,
      submitted: null
    }, _this.handleChange = function (field, e) {
      var nextState = {};
      nextState[field] = e.target.checked;
      _this.setState(nextState);
    }, _this.handleSubmit = function () {
      if (_this.refs.contactForm.isValid()) {
        _this.setState({ submitted: _this.refs.contactForm.getFormData() });
      }
      (0, _axios2.default)({
        url: 'https://api.mailgun.net/v3/sandbox32b8c738195149a19328dd3aa9400a1c.mailgun.org/messages',
        method: 'post',
        username: 'api',
        password: 'key-3ax6xnjp29jd6fds4gc373sgvjxteol0',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Basic ' + window.btoa('api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0')
        },
        data: {
          from: "Excited User <mailgun@some.example.org>",
          to: "amit.erandole@gmail.com",
          subject: "Hello from react app",
          text: "Testing some Mailgun awesomness!"
        }
      }).then(function (response) {
        console.log('SUCCESS', response);
      }).catch(function (error) {
        console.log(error);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Contact, [{
    key: 'render',
    value: function render() {
      var submitted;
      if (this.state.submitted !== null) {
        submitted = _react2.default.createElement('div', { className: 'alert alert-success', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, 'ContactForm data:'), _react2.default.createElement('pre', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, _react2.default.createElement('code', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, (0, _stringify2.default)(this.state.submitted, null, '  '))));
      }

      return _react2.default.createElement(_Layout2.default, { title: 'Contact Form', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('div', { className: 'panel panel-default', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('div', { className: 'panel-heading clearfix', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h3', { className: 'panel-title pull-left', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Contact Form'), _react2.default.createElement('div', { className: 'pull-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('label', { className: 'checkbox-inline', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('input', { type: 'checkbox',
        checked: this.state.email,
        onChange: this.handleChange.bind(this, 'email'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), ' Email'), _react2.default.createElement('label', { className: 'checkbox-inline', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('input', { type: 'checkbox',
        checked: this.state.question,
        onChange: this.handleChange.bind(this, 'question'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), ' Question'))), _react2.default.createElement('div', { className: 'panel-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_ContactForm2.default, { ref: 'contactForm',
        email: this.state.email,
        question: this.state.question,
        company: this.props.company,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement('div', { className: 'panel-footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'btn btn-primary btn-block', onClick: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Submit'))), submitted);
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;