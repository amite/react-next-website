webpackHotUpdate(5,{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(545);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(547);

var _axios2 = _interopRequireDefault(_axios);

var _ContactForm = __webpack_require__(568);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _Layout = __webpack_require__(569);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/pages/contact.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/pages/contact.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/contact")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xOTEzOTFmMGYwYWQ0MjQ2ODc2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcz84ZjQxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOiB0cnVlXG4gICAgLCBxdWVzdGlvbjogdHJ1ZVxuICAgICwgc3VibWl0dGVkOiBudWxsXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0dGVkICE9PSBudWxsKSB7XG4gICAgICBzdWJtaXR0ZWQgPSA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPHA+Q29udGFjdEZvcm0gZGF0YTo8L3A+XG4gICAgICAgIDxwcmU+PGNvZGU+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc3VibWl0dGVkLCBudWxsLCAnICAnKX08L2NvZGU+PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gPExheW91dCB0aXRsZT1cIkNvbnRhY3QgRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZyBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBwdWxsLWxlZnRcIj5Db250YWN0IEZvcm08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdlbWFpbCcpfVxuICAgICAgICAgICAgICAvPiBFbWFpbFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncXVlc3Rpb24nKX1cbiAgICAgICAgICAgICAgLz4gUXVlc3Rpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICA8Q29udGFjdEZvcm0gcmVmPVwiY29udGFjdEZvcm1cIlxuICAgICAgICAgICAgZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICBxdWVzdGlvbj17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cbiAgICAgICAgICAgIGNvbXBhbnk9e3RoaXMucHJvcHMuY29tcGFueX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3N1Ym1pdHRlZH1cbiAgICA8L0xheW91dD5cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCwgZSkgPT4ge1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fVxuICAgIG5leHRTdGF0ZVtmaWVsZF0gPSBlLnRhcmdldC5jaGVja2VkXG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVmcy5jb250YWN0Rm9ybS5pc1ZhbGlkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0ZWQ6IHRoaXMucmVmcy5jb250YWN0Rm9ybS5nZXRGb3JtRGF0YSgpIH0pXG4gICAgfVxuICAgIGF4aW9zKHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1haWxndW4ubmV0L3YzL3NhbmRib3gzMmI4YzczODE5NTE0OWExOTMyOGRkM2FhOTQwMGExYy5tYWlsZ3VuLm9yZy9tZXNzYWdlcycsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVzZXJuYW1lOidhcGknLFxuICAgICAgcGFzc3dvcmQ6ICdrZXktM2F4NnhuanAyOWpkNmZkczRnYzM3M3Nndmp4dGVvbDAnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHt3aW5kb3cuYnRvYSgnYXBpOmtleS0zYXg2eG5qcDI5amQ2ZmRzNGdjMzczc2d2anh0ZW9sMCcpfWBcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZyb206IFwiRXhjaXRlZCBVc2VyIDxtYWlsZ3VuQHNvbWUuZXhhbXBsZS5vcmc+XCIsXG4gICAgICAgIHRvOiBcImFtaXQuZXJhbmRvbGVAZ21haWwuY29tXCIsXG4gICAgICAgIHN1YmplY3Q6IFwiSGVsbG8gZnJvbSByZWFjdCBhcHBcIixcbiAgICAgICAgdGV4dDogXCJUZXN0aW5nIHNvbWUgTWFpbGd1biBhd2Vzb21uZXNzIVwiXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUycsIHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWN0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQWtEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBREE7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQVRBO0FBZ0JBO0FBakJBO0FBb0JBO0FBRUE7Ozs7OztBQTFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUF1Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=