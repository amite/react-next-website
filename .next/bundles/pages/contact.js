
          window.__NEXT_REGISTER_PAGE('/contact', function() {
            var comp = module.exports =
webpackJsonp([9],{

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _SiteHead = __webpack_require__(572);

var _SiteHead2 = _interopRequireDefault(_SiteHead);

var _Nav = __webpack_require__(571);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Layout.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_SiteHead2.default, { title: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.children)));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Layout.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js';

var links = [{ link: 'Home', href: '/' }, { link: 'About', href: '/about' }, { link: 'Blog', href: '/blog' }, { link: 'Contact', href: '/contact' }];

var renderLinks = function renderLinks(links) {
  return links.map(function (l) {
    return _react2.default.createElement('li', { key: l.link, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement(_link2.default, { href: l.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, l.link)));
  });
};

var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'navbar navbar-default navbar-custom', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('div', { className: 'navbar-header page-scroll', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('span', { className: 'sr-only', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Toggle navigation'), 'Menu ', _react2.default.createElement('i', { className: 'fa fa-bars', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'React Next')), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, renderLinks(links)))));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js"); } } })();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/SiteHead.js';


var SiteHead = function (_Component) {
  (0, _inherits3.default)(SiteHead, _Component);

  function SiteHead() {
    (0, _classCallCheck3.default)(this, SiteHead);

    return (0, _possibleConstructorReturn3.default)(this, (SiteHead.__proto__ || (0, _getPrototypeOf2.default)(SiteHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(SiteHead, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.title || 'Default'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic', rel: 'stylesheet', type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800', rel: 'stylesheet', type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('style', { global: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, '\n          body {\n            background: hsla(0, 0%, 88%, 0.53);\n            font-family: \'Lora\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;                 \n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/SiteHead.js"); } } })();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(565);

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

var _ContactForm = __webpack_require__(580);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _Layout = __webpack_require__(570);

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

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/ContactForm.js';

var STATES = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

var ContactForm = function (_Component) {
  (0, _inherits3.default)(ContactForm, _Component);

  function ContactForm(props) {
    (0, _classCallCheck3.default)(this, ContactForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactForm.__proto__ || (0, _getPrototypeOf2.default)(ContactForm)).call(this, props));

    _this.isValid = function () {
      var fields = ['firstName', 'lastName', 'phoneNumber', 'address', 'city', 'state', 'zipCode'];
      if (_this.props.email) fields.push('email');
      if (_this.props.question) fields.push('question');

      var errors = {};
      fields.forEach(function (field) {
        var value = trim(_reactDom2.default.findDOMNode(this.refs[field]).value);
        if (!value) {
          errors[field] = 'This field is required';
        }
      }.bind(_this));
      _this.setState({ errors: errors });

      var isValid = true;
      for (var error in errors) {
        isValid = false;
        break;
      }
      return isValid;
    };

    _this.getFormData = function () {
      var data = {
        firstName: _reactDom2.default.findDOMNode(_this.refs.firstName).value,
        lastName: _reactDom2.default.findDOMNode(_this.refs.lastName).value,
        phoneNumber: _reactDom2.default.findDOMNode(_this.refs.phoneNumber).value,
        address: _reactDom2.default.findDOMNode(_this.refs.address).value,
        city: _reactDom2.default.findDOMNode(_this.refs.city).value,
        state: _reactDom2.default.findDOMNode(_this.refs.state).value,
        zipCode: _reactDom2.default.findDOMNode(_this.refs.zipCode).value,
        currentCustomer: _reactDom2.default.findDOMNode(_this.refs.currentCustomerYes).checked
      };
      if (_this.props.email) data.email = _reactDom2.default.findDOMNode(_this.refs.email).value;
      if (_this.props.question) data.question = _reactDom2.default.findDOMNode(_this.refs.question).value;
      return data;
    };

    _this.renderTextInput = function (id, label) {
      return _this.renderField(id, label, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }));
    };

    _this.renderTextarea = function (id, label) {
      return _this.renderField(id, label, _react2.default.createElement('textarea', { className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }));
    };

    _this.renderSelect = function (id, label, values) {
      var options = values.map(function (value, index) {
        return _react2.default.createElement('option', { key: index, value: value, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, value);
      });
      return _this.renderField(id, label, _react2.default.createElement('select', { className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, options));
    };

    _this.renderRadioInlines = function (id, label, kwargs) {
      var radios = kwargs.values.map(function (value, index) {
        var defaultChecked = value == kwargs.defaultCheckedValue;
        return _react2.default.createElement('label', { key: index, className: 'radio-inline', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement('input', { type: 'radio', ref: id + value, name: id, value: value, defaultChecked: defaultChecked, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), value);
      });
      return _this.renderField(id, label, radios);
    };

    _this.renderField = function (id, label, field) {
      return _react2.default.createElement('div', { className: $c('form-group', { 'has-error': id in _this.state.errors }), __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('label', { htmlFor: id, className: 'col-sm-4 control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, label), _react2.default.createElement('div', { className: 'col-sm-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, field));
    };

    _this.state = {
      errors: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ContactForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'form-horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.renderTextInput('firstName', 'First Name'), this.renderTextInput('lastName', 'Last Name'), this.renderTextInput('phoneNumber', 'Phone number'), this.props.email && this.renderTextInput('email', 'Email'), this.props.question && this.renderTextarea('question', 'Question'), this.renderTextInput('address', 'Address'), this.renderTextInput('city', 'City'), this.renderSelect('state', 'State', STATES), this.renderTextInput('zipCode', 'Zip Code'), this.renderRadioInlines('currentCustomer', 'Are you currently a ' + this.props.company + ' Customer?', {
        values: ['Yes', 'No'],
        defaultCheckedValue: 'No'
      }));
    }
  }]);

  return ContactForm;
}(_react.Component);

// Utils

ContactForm.defaultProps = {
  email: true,
  question: false
};
var trim = function () {
  var TRIM_RE = /^\s+|\s+$/g;
  return function trim(string) {
    return string.replace(TRIM_RE, '');
  };
}();

function $c(staticClassName, conditionalClassNames) {
  var classNames = [];
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName;
  } else {
    classNames.push(staticClassName);
  }
  for (var className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className);
    }
  }
  return classNames.join(' ');
}

exports.default = ContactForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/ContactForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/ContactForm.js"); } } })();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(579);


/***/ })

},[581]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jb250YWN0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NmY3YzlkMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz82ZjdjOWQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/NmY3YzlkMyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzZmN2M5ZDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcz82ZjdjOWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNpdGVIZWFkIGZyb20gJy4vU2l0ZUhlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2l0ZUhlYWQgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9Lz5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbGluazogJ0hvbWUnLCBocmVmOiAnLyd9LFxuICB7IGxpbms6ICdBYm91dCcsIGhyZWY6ICcvYWJvdXQnfSxcbiAgeyBsaW5rOiAnQmxvZycsIGhyZWY6ICcvYmxvZyd9LFxuICB7IGxpbms6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0J31cbl1cblxuY29uc3QgcmVuZGVyTGlua3MgPSAobGlua3MpID0+XG4gIGxpbmtzLm1hcCAobCA9PlxuICAgIDxsaSBrZXk9e2wubGlua30+XG4gICAgICA8TGluayBocmVmPXtsLmhyZWZ9PlxuICAgICAgICA8YT57bC5saW5rfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApXG5cbmNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWN1c3RvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyIHBhZ2Utc2Nyb2xsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICBNZW51IDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+UmVhY3QgTmV4dDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHsgcmVuZGVyTGlua3MobGlua3MpIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuY2xhc3MgU2l0ZUhlYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGUgfHwgJ0RlZmF1bHQnfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvcmE6NDAwLDcwMCw0MDBpdGFsaWMsNzAwaXRhbGljJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyAvPlxuICAgICAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMGl0YWxpYyw0MDBpdGFsaWMsNjAwaXRhbGljLDcwMGl0YWxpYyw4MDBpdGFsaWMsNDAwLDMwMCw2MDAsNzAwLDgwMCcgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgLz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgODglLCAwLjUzKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzYzNiM2I7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSwgaDIsIGgzIHsgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUhlYWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NpdGVIZWFkLmpzIiwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY2xhc3MgQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgZW1haWw6IHRydWVcbiAgICAsIHF1ZXN0aW9uOiB0cnVlXG4gICAgLCBzdWJtaXR0ZWQ6IG51bGxcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXR0ZWQgIT09IG51bGwpIHtcbiAgICAgIHN1Ym1pdHRlZCA9IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxuICAgICAgICA8cD5Db250YWN0Rm9ybSBkYXRhOjwvcD5cbiAgICAgICAgPHByZT48Y29kZT57SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zdWJtaXR0ZWQsIG51bGwsICcgICcpfTwvY29kZT48L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPVwiQ29udGFjdCBGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nIGNsZWFyZml4XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIHB1bGwtbGVmdFwiPkNvbnRhY3QgRm9ybTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2VtYWlsJyl9XG4gICAgICAgICAgICAgIC8+IEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdxdWVzdGlvbicpfVxuICAgICAgICAgICAgICAvPiBRdWVzdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgIDxDb250YWN0Rm9ybSByZWY9XCJjb250YWN0Rm9ybVwiXG4gICAgICAgICAgICBlbWFpbD17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgIHF1ZXN0aW9uPXt0aGlzLnN0YXRlLnF1ZXN0aW9ufVxuICAgICAgICAgICAgY29tcGFueT17dGhpcy5wcm9wcy5jb21wYW55fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c3VibWl0dGVkfVxuICAgIDwvTGF5b3V0PlxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkLCBlKSA9PiB7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9XG4gICAgbmV4dFN0YXRlW2ZpZWxkXSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5yZWZzLmNvbnRhY3RGb3JtLmlzVmFsaWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRlZDogdGhpcy5yZWZzLmNvbnRhY3RGb3JtLmdldEZvcm1EYXRhKCkgfSlcbiAgICB9XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubWFpbGd1bi5uZXQvdjMvc2FuZGJveDMyYjhjNzM4MTk1MTQ5YTE5MzI4ZGQzYWE5NDAwYTFjLm1haWxndW4ub3JnL21lc3NhZ2VzJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgdXNlcm5hbWU6J2FwaScsXG4gICAgICBwYXNzd29yZDogJ2tleS0zYXg2eG5qcDI5amQ2ZmRzNGdjMzczc2d2anh0ZW9sMCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCYXNpYyAke3dpbmRvdy5idG9hKCdhcGk6a2V5LTNheDZ4bmpwMjlqZDZmZHM0Z2MzNzNzZ3ZqeHRlb2wwJyl9YFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZnJvbTogXCJFeGNpdGVkIFVzZXIgPG1haWxndW5Ac29tZS5leGFtcGxlLm9yZz5cIixcbiAgICAgICAgdG86IFwiYW1pdC5lcmFuZG9sZUBnbWFpbC5jb21cIixcbiAgICAgICAgc3ViamVjdDogXCJIZWxsbyBmcm9tIHJlYWN0IGFwcFwiLFxuICAgICAgICB0ZXh0OiBcIlRlc3Rpbmcgc29tZSBNYWlsZ3VuIGF3ZXNvbW5lc3MhXCJcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTJywgcmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuICBleHBvcnQgZGVmYXVsdCBDb250YWN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbnRhY3QuanM/ZW50cnkiLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbnZhciBTVEFURVMgPSBbXG4gICdBTCcsICdBSycsICdBUycsICdBWicsICdBUicsICdDQScsICdDTycsICdDVCcsICdERScsICdEQycsICdGTCcsICdHQScsICdISScsXG4gICdJRCcsICdJTCcsICdJTicsICdJQScsICdLUycsICdLWScsICdMQScsICdNRScsICdNRCcsICdNQScsICdNSScsICdNTicsICdNUycsXG4gICdNTycsICdNVCcsICdORScsICdOVicsICdOSCcsICdOSicsICdOTScsICdOWScsICdOQycsICdORCcsICdPSCcsICdPSycsICdPUicsXG4gICdQQScsICdSSScsICdTQycsICdTRCcsICdUTicsICdUWCcsICdVVCcsICdWVCcsICdWQScsICdXQScsICdXVicsICdXSScsICdXWSdcbl1cblxuXG5jbGFzcyBDb250YWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBlbWFpbDogdHJ1ZVxuICAgICwgcXVlc3Rpb246IGZhbHNlXG4gIH1cblxuICBpc1ZhbGlkID0gKCkgPT4ge1xuICAgIHZhciBmaWVsZHMgPSBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdwaG9uZU51bWJlcicsICdhZGRyZXNzJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwQ29kZSddXG4gICAgaWYgKHRoaXMucHJvcHMuZW1haWwpIGZpZWxkcy5wdXNoKCdlbWFpbCcpXG4gICAgaWYgKHRoaXMucHJvcHMucXVlc3Rpb24pIGZpZWxkcy5wdXNoKCdxdWVzdGlvbicpXG5cbiAgICB2YXIgZXJyb3JzID0ge31cbiAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCkge1xuICAgICAgdmFyIHZhbHVlID0gdHJpbShSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbZmllbGRdKS52YWx1ZSlcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSlcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVycm9yc30pXG5cbiAgICB2YXIgaXNWYWxpZCA9IHRydWVcbiAgICBmb3IgKHZhciBlcnJvciBpbiBlcnJvcnMpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuXG4gIGdldEZvcm1EYXRhID0gKCkgPT4ge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgZmlyc3ROYW1lOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmlyc3ROYW1lKS52YWx1ZVxuICAgICwgbGFzdE5hbWU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5sYXN0TmFtZSkudmFsdWVcbiAgICAsIHBob25lTnVtYmVyOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGhvbmVOdW1iZXIpLnZhbHVlXG4gICAgLCBhZGRyZXNzOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYWRkcmVzcykudmFsdWVcbiAgICAsIGNpdHk6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5jaXR5KS52YWx1ZVxuICAgICwgc3RhdGU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zdGF0ZSkudmFsdWVcbiAgICAsIHppcENvZGU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy56aXBDb2RlKS52YWx1ZVxuICAgICwgY3VycmVudEN1c3RvbWVyOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY3VycmVudEN1c3RvbWVyWWVzKS5jaGVja2VkXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmVtYWlsKSBkYXRhLmVtYWlsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmVtYWlsKS52YWx1ZVxuICAgIGlmICh0aGlzLnByb3BzLnF1ZXN0aW9uKSBkYXRhLnF1ZXN0aW9uID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnF1ZXN0aW9uKS52YWx1ZVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiPlxuICAgICAge3RoaXMucmVuZGVyVGV4dElucHV0KCdmaXJzdE5hbWUnLCAnRmlyc3QgTmFtZScpfVxuICAgICAge3RoaXMucmVuZGVyVGV4dElucHV0KCdsYXN0TmFtZScsICdMYXN0IE5hbWUnKX1cbiAgICAgIHt0aGlzLnJlbmRlclRleHRJbnB1dCgncGhvbmVOdW1iZXInLCAnUGhvbmUgbnVtYmVyJyl9XG4gICAgICB7dGhpcy5wcm9wcy5lbWFpbCAmJiB0aGlzLnJlbmRlclRleHRJbnB1dCgnZW1haWwnLCAnRW1haWwnKX1cbiAgICAgIHt0aGlzLnByb3BzLnF1ZXN0aW9uICYmIHRoaXMucmVuZGVyVGV4dGFyZWEoJ3F1ZXN0aW9uJywgJ1F1ZXN0aW9uJyl9XG4gICAgICB7dGhpcy5yZW5kZXJUZXh0SW5wdXQoJ2FkZHJlc3MnLCAnQWRkcmVzcycpfVxuICAgICAge3RoaXMucmVuZGVyVGV4dElucHV0KCdjaXR5JywgJ0NpdHknKX1cbiAgICAgIHt0aGlzLnJlbmRlclNlbGVjdCgnc3RhdGUnLCAnU3RhdGUnLCBTVEFURVMpfVxuICAgICAge3RoaXMucmVuZGVyVGV4dElucHV0KCd6aXBDb2RlJywgJ1ppcCBDb2RlJyl9XG4gICAgICB7dGhpcy5yZW5kZXJSYWRpb0lubGluZXMoJ2N1cnJlbnRDdXN0b21lcicsICdBcmUgeW91IGN1cnJlbnRseSBhICcgKyB0aGlzLnByb3BzLmNvbXBhbnkgKyAnIEN1c3RvbWVyPycsIHtcbiAgICAgICAgdmFsdWVzOiBbJ1llcycsICdObyddXG4gICAgICAsIGRlZmF1bHRDaGVja2VkVmFsdWU6ICdObydcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICB9XG5cbiAgIHJlbmRlclRleHRJbnB1dCA9IChpZCwgbGFiZWwpID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWVsZChpZCwgbGFiZWwsXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17aWR9IHJlZj17aWR9Lz5cbiAgICApXG4gIH1cblxuICAgcmVuZGVyVGV4dGFyZWEgPSAoaWQsIGxhYmVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRmllbGQoaWQsIGxhYmVsLFxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPXtpZH0gcmVmPXtpZH0vPlxuICAgIClcbiAgfVxuXG4gcmVuZGVyU2VsZWN0ID0gKGlkLCBsYWJlbCwgdmFsdWVzKSA9PiB7XG4gICAgdmFyIG9wdGlvbnMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3ZhbHVlfT57dmFsdWV9PC9vcHRpb24+XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWVsZChpZCwgbGFiZWwsXG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPXtpZH0gcmVmPXtpZH0+XG4gICAgICAgIHtvcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgKVxuICB9XG5cbiByZW5kZXJSYWRpb0lubGluZXMgPSAoaWQsIGxhYmVsLCBrd2FyZ3MpID0+IHtcbiAgICB2YXIgcmFkaW9zID0ga3dhcmdzLnZhbHVlcy5tYXAoZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICB2YXIgZGVmYXVsdENoZWNrZWQgPSAodmFsdWUgPT0ga3dhcmdzLmRlZmF1bHRDaGVja2VkVmFsdWUpXG4gICAgICByZXR1cm4gPGxhYmVsIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgcmVmPXtpZCArIHZhbHVlfSBuYW1lPXtpZH0gdmFsdWU9e3ZhbHVlfSBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9Lz5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9sYWJlbD5cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnJlbmRlckZpZWxkKGlkLCBsYWJlbCwgcmFkaW9zKVxuICB9XG5cbnJlbmRlckZpZWxkID0gKGlkLCBsYWJlbCwgZmllbGQpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyRjKCdmb3JtLWdyb3VwJywgeydoYXMtZXJyb3InOiBpZCBpbiB0aGlzLnN0YXRlLmVycm9yc30pfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwiY29sLXNtLTQgY29udHJvbC1sYWJlbFwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICB7ZmllbGR9XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuLy8gVXRpbHNcblxudmFyIHRyaW0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIFRSSU1fUkUgPSAvXlxccyt8XFxzKyQvZ1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoVFJJTV9SRSwgJycpXG4gIH1cbn0oKVxuXG5mdW5jdGlvbiAkYyhzdGF0aWNDbGFzc05hbWUsIGNvbmRpdGlvbmFsQ2xhc3NOYW1lcykge1xuICB2YXIgY2xhc3NOYW1lcyA9IFtdXG4gIGlmICh0eXBlb2YgY29uZGl0aW9uYWxDbGFzc05hbWVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uZGl0aW9uYWxDbGFzc05hbWVzID0gc3RhdGljQ2xhc3NOYW1lXG4gIH1cbiAgZWxzZSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0YXRpY0NsYXNzTmFtZSlcbiAgfVxuICBmb3IgKHZhciBjbGFzc05hbWUgaW4gY29uZGl0aW9uYWxDbGFzc05hbWVzKSB7XG4gICAgaWYgKCEhY29uZGl0aW9uYWxDbGFzc05hbWVzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpXG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc05hbWVzLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFpQ0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQWtEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBREE7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQVRBO0FBZ0JBO0FBakJBO0FBb0JBO0FBRUE7Ozs7OztBQTFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUF1Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUVBO0FBaERBO0FBQ0E7QUFtRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBdEVBO0FBQ0E7QUF5RUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBNUVBO0FBQ0E7QUErRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFyRkE7QUFDQTtBQTBGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBbkdBO0FBQ0E7QUFxR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQTVHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBOENBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVdBO0FBSUE7QUFKQTs7Ozs7QUFoRUE7QUFDQTtBQWtIQTtBQUNBO0FBcEhBO0FBV0E7QUFBQTtBQURBO0FBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        