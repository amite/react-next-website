
          window.__NEXT_REGISTER_PAGE('/contact', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

/***/ 568:
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

/***/ 569:
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

var _SiteHead = __webpack_require__(571);

var _SiteHead2 = _interopRequireDefault(_SiteHead);

var _Nav = __webpack_require__(570);

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

var _link = __webpack_require__(567);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js';

var links = [{ link: 'Home', href: '/' }, { link: 'About', href: '/about' }, { link: 'Contact', href: '/contact' }];

var renderLinks = function renderLinks(links) {
  return links.map(function (l) {
    return _react2.default.createElement('li', { key: l.link, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, _react2.default.createElement(_link2.default, { href: l.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
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
          lineNumber: 23
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'navbar-header page-scroll', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('span', { className: 'sr-only', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Toggle navigation'), 'Menu ', _react2.default.createElement('i', { className: 'fa fa-bars', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'React Next')), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, renderLinks(links)))));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/Nav.js"); } } })();

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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ })

},[572]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jb250YWN0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcz82N2IxODMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanM/NjdiMTgzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz82N2IxODMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzPzY3YjE4MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaXRlSGVhZC5qcz82N2IxODMyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOiB0cnVlXG4gICAgLCBxdWVzdGlvbjogdHJ1ZVxuICAgICwgc3VibWl0dGVkOiBudWxsXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0dGVkICE9PSBudWxsKSB7XG4gICAgICBzdWJtaXR0ZWQgPSA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgPHA+Q29udGFjdEZvcm0gZGF0YTo8L3A+XG4gICAgICAgIDxwcmU+PGNvZGU+e0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc3VibWl0dGVkLCBudWxsLCAnICAnKX08L2NvZGU+PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gPExheW91dCB0aXRsZT1cIkNvbnRhY3QgRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZyBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBwdWxsLWxlZnRcIj5Db250YWN0IEZvcm08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdlbWFpbCcpfVxuICAgICAgICAgICAgICAvPiBFbWFpbFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncXVlc3Rpb24nKX1cbiAgICAgICAgICAgICAgLz4gUXVlc3Rpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICA8Q29udGFjdEZvcm0gcmVmPVwiY29udGFjdEZvcm1cIlxuICAgICAgICAgICAgZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICBxdWVzdGlvbj17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cbiAgICAgICAgICAgIGNvbXBhbnk9e3RoaXMucHJvcHMuY29tcGFueX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3N1Ym1pdHRlZH1cbiAgICA8L0xheW91dD5cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCwgZSkgPT4ge1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fVxuICAgIG5leHRTdGF0ZVtmaWVsZF0gPSBlLnRhcmdldC5jaGVja2VkXG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVmcy5jb250YWN0Rm9ybS5pc1ZhbGlkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0ZWQ6IHRoaXMucmVmcy5jb250YWN0Rm9ybS5nZXRGb3JtRGF0YSgpIH0pXG4gICAgfVxuICAgIGF4aW9zKHtcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1haWxndW4ubmV0L3YzL3NhbmRib3gzMmI4YzczODE5NTE0OWExOTMyOGRkM2FhOTQwMGExYy5tYWlsZ3VuLm9yZy9tZXNzYWdlcycsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVzZXJuYW1lOidhcGknLFxuICAgICAgcGFzc3dvcmQ6ICdrZXktM2F4NnhuanAyOWpkNmZkczRnYzM3M3Nndmp4dGVvbDAnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHt3aW5kb3cuYnRvYSgnYXBpOmtleS0zYXg2eG5qcDI5amQ2ZmRzNGdjMzczc2d2anh0ZW9sMCcpfWBcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGZyb206IFwiRXhjaXRlZCBVc2VyIDxtYWlsZ3VuQHNvbWUuZXhhbXBsZS5vcmc+XCIsXG4gICAgICAgIHRvOiBcImFtaXQuZXJhbmRvbGVAZ21haWwuY29tXCIsXG4gICAgICAgIHN1YmplY3Q6IFwiSGVsbG8gZnJvbSByZWFjdCBhcHBcIixcbiAgICAgICAgdGV4dDogXCJUZXN0aW5nIHNvbWUgTWFpbGd1biBhd2Vzb21uZXNzIVwiXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUycsIHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWN0LmpzP2VudHJ5IiwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG52YXIgU1RBVEVTID0gW1xuICAnQUwnLCAnQUsnLCAnQVMnLCAnQVonLCAnQVInLCAnQ0EnLCAnQ08nLCAnQ1QnLCAnREUnLCAnREMnLCAnRkwnLCAnR0EnLCAnSEknLFxuICAnSUQnLCAnSUwnLCAnSU4nLCAnSUEnLCAnS1MnLCAnS1knLCAnTEEnLCAnTUUnLCAnTUQnLCAnTUEnLCAnTUknLCAnTU4nLCAnTVMnLFxuICAnTU8nLCAnTVQnLCAnTkUnLCAnTlYnLCAnTkgnLCAnTkonLCAnTk0nLCAnTlknLCAnTkMnLCAnTkQnLCAnT0gnLCAnT0snLCAnT1InLFxuICAnUEEnLCAnUkknLCAnU0MnLCAnU0QnLCAnVE4nLCAnVFgnLCAnVVQnLCAnVlQnLCAnVkEnLCAnV0EnLCAnV1YnLCAnV0knLCAnV1knXG5dXG5cblxuY2xhc3MgQ29udGFjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgZW1haWw6IHRydWVcbiAgICAsIHF1ZXN0aW9uOiBmYWxzZVxuICB9XG5cbiAgaXNWYWxpZCA9ICgpID0+IHtcbiAgICB2YXIgZmllbGRzID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVOdW1iZXInLCAnYWRkcmVzcycsICdjaXR5JywgJ3N0YXRlJywgJ3ppcENvZGUnXVxuICAgIGlmICh0aGlzLnByb3BzLmVtYWlsKSBmaWVsZHMucHVzaCgnZW1haWwnKVxuICAgIGlmICh0aGlzLnByb3BzLnF1ZXN0aW9uKSBmaWVsZHMucHVzaCgncXVlc3Rpb24nKVxuXG4gICAgdmFyIGVycm9ycyA9IHt9XG4gICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRyaW0oUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzW2ZpZWxkXSkudmFsdWUpXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIGVycm9yc1tmaWVsZF0gPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnJvcnN9KVxuXG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlXG4gICAgZm9yICh2YXIgZXJyb3IgaW4gZXJyb3JzKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkXG4gIH1cblxuICBnZXRGb3JtRGF0YSA9ICgpID0+IHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGZpcnN0TmFtZTogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmZpcnN0TmFtZSkudmFsdWVcbiAgICAsIGxhc3ROYW1lOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGFzdE5hbWUpLnZhbHVlXG4gICAgLCBwaG9uZU51bWJlcjogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnBob25lTnVtYmVyKS52YWx1ZVxuICAgICwgYWRkcmVzczogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmFkZHJlc3MpLnZhbHVlXG4gICAgLCBjaXR5OiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY2l0eSkudmFsdWVcbiAgICAsIHN0YXRlOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3RhdGUpLnZhbHVlXG4gICAgLCB6aXBDb2RlOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuemlwQ29kZSkudmFsdWVcbiAgICAsIGN1cnJlbnRDdXN0b21lcjogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmN1cnJlbnRDdXN0b21lclllcykuY2hlY2tlZFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5lbWFpbCkgZGF0YS5lbWFpbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5lbWFpbCkudmFsdWVcbiAgICBpZiAodGhpcy5wcm9wcy5xdWVzdGlvbikgZGF0YS5xdWVzdGlvbiA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5xdWVzdGlvbikudmFsdWVcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgIHt0aGlzLnJlbmRlclRleHRJbnB1dCgnZmlyc3ROYW1lJywgJ0ZpcnN0IE5hbWUnKX1cbiAgICAgIHt0aGlzLnJlbmRlclRleHRJbnB1dCgnbGFzdE5hbWUnLCAnTGFzdCBOYW1lJyl9XG4gICAgICB7dGhpcy5yZW5kZXJUZXh0SW5wdXQoJ3Bob25lTnVtYmVyJywgJ1Bob25lIG51bWJlcicpfVxuICAgICAge3RoaXMucHJvcHMuZW1haWwgJiYgdGhpcy5yZW5kZXJUZXh0SW5wdXQoJ2VtYWlsJywgJ0VtYWlsJyl9XG4gICAgICB7dGhpcy5wcm9wcy5xdWVzdGlvbiAmJiB0aGlzLnJlbmRlclRleHRhcmVhKCdxdWVzdGlvbicsICdRdWVzdGlvbicpfVxuICAgICAge3RoaXMucmVuZGVyVGV4dElucHV0KCdhZGRyZXNzJywgJ0FkZHJlc3MnKX1cbiAgICAgIHt0aGlzLnJlbmRlclRleHRJbnB1dCgnY2l0eScsICdDaXR5Jyl9XG4gICAgICB7dGhpcy5yZW5kZXJTZWxlY3QoJ3N0YXRlJywgJ1N0YXRlJywgU1RBVEVTKX1cbiAgICAgIHt0aGlzLnJlbmRlclRleHRJbnB1dCgnemlwQ29kZScsICdaaXAgQ29kZScpfVxuICAgICAge3RoaXMucmVuZGVyUmFkaW9JbmxpbmVzKCdjdXJyZW50Q3VzdG9tZXInLCAnQXJlIHlvdSBjdXJyZW50bHkgYSAnICsgdGhpcy5wcm9wcy5jb21wYW55ICsgJyBDdXN0b21lcj8nLCB7XG4gICAgICAgIHZhbHVlczogWydZZXMnLCAnTm8nXVxuICAgICAgLCBkZWZhdWx0Q2hlY2tlZFZhbHVlOiAnTm8nXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgfVxuXG4gICByZW5kZXJUZXh0SW5wdXQgPSAoaWQsIGxhYmVsKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRmllbGQoaWQsIGxhYmVsLFxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9e2lkfSByZWY9e2lkfS8+XG4gICAgKVxuICB9XG5cbiAgIHJlbmRlclRleHRhcmVhID0gKGlkLCBsYWJlbCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckZpZWxkKGlkLCBsYWJlbCxcbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17aWR9IHJlZj17aWR9Lz5cbiAgICApXG4gIH1cblxuIHJlbmRlclNlbGVjdCA9IChpZCwgbGFiZWwsIHZhbHVlcykgPT4ge1xuICAgIHZhciBvcHRpb25zID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt2YWx1ZX0+e3ZhbHVlfTwvb3B0aW9uPlxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRmllbGQoaWQsIGxhYmVsLFxuICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17aWR9IHJlZj17aWR9PlxuICAgICAgICB7b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgIClcbiAgfVxuXG4gcmVuZGVyUmFkaW9JbmxpbmVzID0gKGlkLCBsYWJlbCwga3dhcmdzKSA9PiB7XG4gICAgdmFyIHJhZGlvcyA9IGt3YXJncy52YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgdmFyIGRlZmF1bHRDaGVja2VkID0gKHZhbHVlID09IGt3YXJncy5kZWZhdWx0Q2hlY2tlZFZhbHVlKVxuICAgICAgcmV0dXJuIDxsYWJlbCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHJlZj17aWQgKyB2YWx1ZX0gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZX0gZGVmYXVsdENoZWNrZWQ9e2RlZmF1bHRDaGVja2VkfS8+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvbGFiZWw+XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWVsZChpZCwgbGFiZWwsIHJhZGlvcylcbiAgfVxuXG5yZW5kZXJGaWVsZCA9IChpZCwgbGFiZWwsIGZpZWxkKSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXskYygnZm9ybS1ncm91cCcsIHsnaGFzLWVycm9yJzogaWQgaW4gdGhpcy5zdGF0ZS5lcnJvcnN9KX0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAge2ZpZWxkfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG59XG5cbi8vIFV0aWxzXG5cbnZhciB0cmltID0gZnVuY3Rpb24oKSB7XG4gIHZhciBUUklNX1JFID0gL15cXHMrfFxccyskL2dcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKFRSSU1fUkUsICcnKVxuICB9XG59KClcblxuZnVuY3Rpb24gJGMoc3RhdGljQ2xhc3NOYW1lLCBjb25kaXRpb25hbENsYXNzTmFtZXMpIHtcbiAgdmFyIGNsYXNzTmFtZXMgPSBbXVxuICBpZiAodHlwZW9mIGNvbmRpdGlvbmFsQ2xhc3NOYW1lcyA9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbmRpdGlvbmFsQ2xhc3NOYW1lcyA9IHN0YXRpY0NsYXNzTmFtZVxuICB9XG4gIGVsc2Uge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdGF0aWNDbGFzc05hbWUpXG4gIH1cbiAgZm9yICh2YXIgY2xhc3NOYW1lIGluIGNvbmRpdGlvbmFsQ2xhc3NOYW1lcykge1xuICAgIGlmICghIWNvbmRpdGlvbmFsQ2xhc3NOYW1lc1tjbGFzc05hbWVdKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKCcgJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNpdGVIZWFkIGZyb20gJy4vU2l0ZUhlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2l0ZUhlYWQgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9Lz5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbGluazogJ0hvbWUnLCBocmVmOiAnLyd9LFxuICB7IGxpbms6ICdBYm91dCcsIGhyZWY6ICcvYWJvdXQnfSxcbiAgeyBsaW5rOiAnQ29udGFjdCcsIGhyZWY6ICcvY29udGFjdCd9XG5dXG5cbmNvbnN0IHJlbmRlckxpbmtzID0gKGxpbmtzKSA9PlxuICBsaW5rcy5tYXAgKGwgPT5cbiAgICA8bGkga2V5PXtsLmxpbmt9PlxuICAgICAgPExpbmsgaHJlZj17bC5ocmVmfT5cbiAgICAgICAgPGE+e2wubGlua308L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKVxuXG5jbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1jdXN0b21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlciBwYWdlLXNjcm9sbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgTWVudSA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlJlYWN0IE5leHQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICB7IHJlbmRlckxpbmtzKGxpbmtzKSB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNsYXNzIFNpdGVIZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlIHx8ICdEZWZhdWx0J308L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb3JhOjQwMCw3MDAsNDAwaXRhbGljLDcwMGl0YWxpYycgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgLz5cbiAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDBpdGFsaWMsNDAwaXRhbGljLDYwMGl0YWxpYyw3MDBpdGFsaWMsODAwaXRhbGljLDQwMCwzMDAsNjAwLDcwMCw4MDAnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDg4JSwgMC41Myk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xvcmEnLCdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSxBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjM2MzYjNiOyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsIGgyLCBoMyB7IFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSxBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVIZWFkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TaXRlSGVhZC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQWtEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBREE7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQVRBO0FBZ0JBO0FBakJBO0FBb0JBO0FBRUE7Ozs7OztBQTFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUF1Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUVBO0FBaERBO0FBQ0E7QUFtRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBdEVBO0FBQ0E7QUF5RUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBNUVBO0FBQ0E7QUErRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFyRkE7QUFDQTtBQTBGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBbkdBO0FBQ0E7QUFxR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQTVHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBOENBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVdBO0FBSUE7QUFKQTs7Ozs7QUFoRUE7QUFDQTtBQWtIQTtBQUNBO0FBcEhBO0FBV0E7QUFBQTtBQURBO0FBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFpQ0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        